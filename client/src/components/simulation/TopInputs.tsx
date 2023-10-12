import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Grid, Slider, FormControl, TextField, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** Helpers
import { addTimesToDate, getDateAndTime } from 'src/helpers/converter/timeConverter'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { getHierarchy, setHierarchy } from 'src/store/pages/simulation'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from 'src/views/forms/form-elements/pickers/PickersCustomInput'
import SimulationResultsTableDialog from 'src/components/dialogs/simulation/SimulationResultsTableDialog'
import SimulationConfigurationDialog from 'src/components/dialogs/simulation/SimulationConfigurationDialog'

// ** Axios Imports
import axios, { AxiosError } from 'axios'

type Props = {}

const marks = [
  {
    value: 20,
    label: <Icon icon='mdi:alert-circle-outline' color='red' />
  },
  {
    value: 100,
    label: <Icon icon='mdi:alert' color='blue' />
  }
]

interface StepType {
  container_key: number
  container_type: string
  current_container_status: string
  current_container_regime: string
  job_order: number
  job: string
  parent_job: string
  first_container_status: string
  first_container_regime: string
  duration: string
  cids: string[]
  success_datetime: string
}

const TopInputs = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.simulation)

  const [sliderValue, setSliderValue] = useState<number>(0)
  const [currentDate, setCurrentDate] = useState<string>()
  // const [simulationDate, setSimulationDate] = useState<string>()
  const [simulationDate, setSimulationDate] = useState<DateType>(new Date())
  const [vesselCount, setVesselCount] = useState<number>(1)
  const [containerCount, setContainerCount] = useState<number>(100)
  const [ruleTitles, setRuleTitles] = useState<string[]>([])
  const [simulationConfigurationOverlay, setSimulationConfigurationOverlay] = useState<boolean>(false)
  const [simulationResultsTableOverlay, setSimulationResultsTableOverlay] = useState<boolean>(false)
  const [waitingRequest, setWaitingRequest] = useState<boolean>(false)
  const [steps, setSteps] = useState<any[]>([])
  const [allResults, setAllResults] = useState<any[]>([])
  const [totalContainerCount, setTotalContainerCount] = useState<number>(0)

  const getSimulationConfiguration = async () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/simulation/getSimulationConfiguration`
    axios
        .get(url)
        .then(res => {
            const configuration = res.data
            setRuleTitles(configuration.rules)
            console.log("configuration result ", configuration)
        })
        .catch(err => console.log('err', err))
  }

  const getCurrentPortStatus = () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/portSummary/getCurrentPortStatus`

    axios
      .get(url)
      .then(res => {
        let result = res.data.data
        setTotalContainerCount(result.total_cont_count)
      })
  }

  useEffect(() => {
    let current = new Date()
    setCurrentDate(getDateAndTime(current))
    setSimulationDate(current)
    getSimulationConfiguration()
    getCurrentPortStatus()
    return () => {}
  }, [])

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

  const runSimulation = async () => {
    let current = new Date()
    setCurrentDate(getDateAndTime(current))
    // setSimulationDate(addTimesToDate(current, sliderValue, 'hours'))

    for (let i = 0; i < sliderValue; i++) {
      dispatch(getHierarchy())
      await delay(3000)
    }
  }

  const startSimulation = async () => {
    setSimulationResultsTableOverlay(true)
    setWaitingRequest(true)
    let url = `${process.env.NEXT_PUBLIC_ML_API_URL}/create-simulation`
    let dateFormatted = formatDate(simulationDate)
    let request = {
      "date": dateFormatted,
      "number_of_containers": containerCount,
      "rules": ruleTitles
    }
    axios
        .post(url, request, {
        })
        .then(function (response) {
          const result = response.data
          setSteps(result.steps)
          let unsortedAllResults = result.all_results
          unsortedAllResults.sort((a: StepType, b: StepType) => new Date(a.success_datetime).getTime() - new Date(b.success_datetime).getTime())
          setAllResults(unsortedAllResults)
          setWaitingRequest(false)
        })
        .catch(function (error) {
          console.log(error)
        })
  }

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <Card>
      <CardHeader
        title='Inputs'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={6}>
          <Grid item sm={10} xs={12}> </Grid>
          <Grid item sm={2} xs={12} style={{textAlign: "right"}}>
            <Button 
              variant='contained' 
              startIcon={<Icon icon='eos-icons:init-container'/>} 
              onClick={() => setSimulationConfigurationOverlay(!simulationConfigurationOverlay)}
              sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
            />
            <SimulationConfigurationDialog 
              open={simulationConfigurationOverlay}
              handleClose={()=>setSimulationConfigurationOverlay(false)}
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextField
              fullWidth
              disabled
              label={'Current Date'}
              value={currentDate}
              InputLabelProps={{ shrink: true }}
              required={true}
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            {/* <TextField
              fullWidth
              disabled
              label={'Simulation Date'}
              value={simulationDate}
              InputLabelProps={{ shrink: true }}
              required={true}
            /> */}
            <DatePicker
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              selected={simulationDate}
              id='date-time-picker'
              dateFormat='MM/dd/yyyy h:mm aa'
              popperPlacement={popperPlacement}
              onChange={(date: Date) => setSimulationDate(date)}
              customInput={<CustomInput label='Simulation Start Date' />}
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextField
              fullWidth
              onChange={e => setVesselCount(parseInt(e.target.value))}
              label={'Vessel Count'}
              value={vesselCount}
              onChange={e => setVesselCount(parseInt(e.target.value))}
              InputLabelProps={{ shrink: true }}
              required={true}
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextField
              fullWidth
              label={'Container count'}
              value={containerCount}
              onChange={e => setContainerCount(parseInt(e.target.value))}
              InputLabelProps={{ shrink: true }}
              required={true}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <FormControl fullWidth>
              <Slider
                marks={marks}
                // step={1}
                min={0}
                max={240}
                size='medium'
                color='primary'
                defaultValue={0}
                value={sliderValue}
                onChange={e => {
                  setSliderValue(e.target?.value)
                }}
                valueLabelDisplay='on'
                aria-labelledby='small-steps-slider'
              />
            </FormControl>
          </Grid>
          <Grid item sm={1} xs={12}>
            <FormControl fullWidth>
              <Button size='large' type='submit' variant='contained' color='success' onClick={startSimulation}>
                Run
              </Button>
              <SimulationResultsTableDialog 
                open={simulationResultsTableOverlay}
                handleClose={()=>setSimulationResultsTableOverlay(false)}
                steps={steps}
                allResults={allResults}
                waitingResult={waitingRequest}
                currentContainerCount={totalContainerCount}
                popperPlacement={popperPlacement}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TopInputs
