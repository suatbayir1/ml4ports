import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Grid, Slider, FormControl, TextField, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

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

const TopInputs = (props: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.simulation)

  const [sliderValue, setSliderValue] = useState<number>(0)
  const [currentDate, setCurrentDate] = useState<string>()
  const [simulationDate, setSimulationDate] = useState<string>()

  useEffect(() => {
    let current = new Date()
    setCurrentDate(getDateAndTime(current))
    setSimulationDate(getDateAndTime(current))

    return () => {}
  }, [])

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

  const runSimulation = async () => {
    let current = new Date()
    setCurrentDate(getDateAndTime(current))
    setSimulationDate(addTimesToDate(current, sliderValue, 'hours'))

    for (let i = 0; i < sliderValue; i++) {
      dispatch(getHierarchy())
      await delay(3000)
    }
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
          <Grid item sm={3} xs={12}>
            <TextField
              fullWidth
              disabled
              label={'Current Date'}
              value={currentDate}
              InputLabelProps={{ shrink: true }}
              required={true}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <TextField
              fullWidth
              disabled
              label={'Simulation Date'}
              value={simulationDate}
              InputLabelProps={{ shrink: true }}
              required={true}
            />
          </Grid>
          <Grid item sm={5} xs={12}>
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
              <Button size='large' type='submit' variant='contained' color='success' onClick={runSimulation}>
                Run
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TopInputs
