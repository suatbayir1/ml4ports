import React, { useState } from 'react'

// ** MUI Imports
import {
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  Button,
  InputLabel,
  Box,
  DialogActions,
  Divider
} from '@mui/material'
import { styled } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Axios Imports
import axios, { AxiosError } from 'axios'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'

import { MLModelType } from 'src/types/components/mlTypes'
import VirtualizedAutoComplete from './VirtualizedAutoComplete'

// ** recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  ReferenceLine,
  Label,
  BarChart,
  Bar,
  Legend
} from 'recharts'

// ** Dropdown data
import {
  regimes,
  containerKinds,
  containerTypes,
  firstServiceNames,
  teus,
  firstLineKeys,
  lastLineKeys,
  dischargeLines,
  departurePorts,
  loadPorts,
  loadLines,
  goods,
  companies,
  fieldType,
  regimesMap,
  tdayDistribution,
  gumrukDistribution
} from './containerFieldData'

interface IProps {
  open: boolean
  model: MLModelType
  handleClose: () => void
}

const StyledTextField = styled(TextField)(() => ({
  '& .MuiFormLabel-asterisk': {
    color: 'red'
  }
}))

const CustomBarTooltip = (data: TooltipProps<any, any>) => {
  const { active, payload } = data

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label === 'yes' ? 'Will be checked' : 'Will NOT be checked'}</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: i.fill, mr: 2.5 } }} key={i.dataKey}>
                <Icon icon='mdi:circle' fontSize='0.6rem' />
                <Typography variant='body2'>{`${i.dataKey} : ${i.payload[i.dataKey]}`}</Typography>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const CustomLineTooltip = (data: TooltipProps<any, any>) => {
  const { active, payload } = data

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label} days</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: i.fill, mr: 2.5 } }} key={i.dataKey}>
                <Icon icon='mdi:circle' fontSize='0.6rem' />
                <Typography variant='body2'>{`Container ${i.dataKey} : ${i.payload[i.dataKey]}`}</Typography>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const MakePredictionDialog = (props: IProps) => {
  const { open, handleClose, model } = props

  // ** States
  const [regime, setRegime] = useState<string>('')
  const [containerKind, setContainerKind] = useState<string>('')
  const [containerType, setContainerType] = useState<string>('')
  const [firstServiceName, setFirstServiceName] = useState<string>('')
  const [teu, setTeu] = useState<number>()
  const [firstLineKey, setFirstLineKey] = useState<number>()
  const [lastLineKey, setLastLineKey] = useState<number>()
  const [dischargeLine, setDischargeLine] = useState<string>('')
  const [departurePort, setDeparturePort] = useState<string>('')
  const [loadPort, setLoadPort] = useState<string>('')
  const [loadLine, setLoadLine] = useState<string>('')
  const [good, setGood] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [waitingRequest, setWaitingRequest] = useState<boolean>(false)
  const [showingResult, setShowingResult] = useState<boolean>(false)
  const [predictionResult, setPredictionResult] = useState<string>('')

  const tdayPrediction2 = async () => {
    let regimmeKey = regimesMap[regime]
    let teuValue = teus[containerType]
    const containerData = {
      regime_key: [regimmeKey],
      c_kind: [containerKind],
      c_type: [containerType],
      first_service_name: [firstServiceName],
      teu: [teuValue],
      first_line_key: [Number(firstLineKey)],
      last_line_key: [Number(lastLineKey)],
      discharge_line: [dischargeLine],
      departure_port: [''],
      load_port: [''],
      load_line: [loadLine],
      good: [good],
      company: [company]
    }
    let url = `http://localhost:7777/tday_input`

    const fetchPromise = fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        token: window.localStorage.getItem('token')
      },
      credentials: 'include',
      body: JSON.stringify(containerData)
    })

    try {
      const response = await fetchPromise
      const res = await response.json()
      return res
    } catch (err) {
      console.log('Error while getting automl settings with msg: ', err)
    }
  }

  const mlPrediction = async () => {
    setWaitingRequest(true)
    let regimmeKey = regimesMap[regime]
    let teuValue = teus[containerType]
    const containerData = {
      regime_key: [regimmeKey],
      c_kind: [containerKind],
      c_type: [containerType],
      first_service_name: [firstServiceName],
      teu: [teuValue],
      first_line_key: [Number(firstLineKey)],
      last_line_key: [Number(lastLineKey)],
      discharge_line: [dischargeLine],
      departure_port: [departurePort && departurePort.length ? departurePort : ''],
      load_port: [loadPort && loadPort.length ? loadPort : ''],
      load_line: [loadLine],
      good: [good],
      company: [company],
      model_path: model.modelPath
    }
    let url = ''
    if (model.modelJob === 'tday') {
      url = 'http://localhost:7777/tday_input'
    } else if (model.modelJob === 'gumruk') {
      url = 'http://localhost:7777/gumruk_input'
    }
    console.log('--', model.modelJob, url)
    if (url.length) {
      axios
        .post(url, containerData, {
          /* headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                } */
        })
        .then(function (response) {
          const result = response.data.prediction[0]
          setPredictionResult(result)
          setWaitingRequest(false)
          setShowingResult(true)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  let checkPredictionForm = (): boolean | undefined => {
    if (
      regime &&
      regime.length &&
      containerKind &&
      containerKind.length &&
      containerType &&
      containerType.length &&
      firstServiceName &&
      firstServiceName.length &&
      firstLineKey &&
      lastLineKey &&
      dischargeLine &&
      dischargeLine.length &&
      loadLine &&
      loadLine.length &&
      good &&
      good.length &&
      company &&
      company.length
    ) {
      return false
    }
    return true
  }

  return (
    <div>
      <Dialog
        onClose={() => {
          handleClose()
          setWaitingRequest(false)
          setShowingResult(false)
        }}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span'>
            Make Prediction
          </Typography>
          <IconButton
            aria-label='close'
            onClick={() => {
              handleClose()
              setWaitingRequest(false)
              setShowingResult(false)
            }}
            sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 4 }}>
          {!waitingRequest && !showingResult && (
            <>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={regimes}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option}
                        //renderInput={params => <TextField {...params} label='Regime' />}
                        value={regime}
                        onChange={(e, value) => {
                          setRegime(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Regime'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={containerKinds}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option}
                        //renderInput={params => <TextField {...params} label='Container Kind' />}
                        value={containerKind}
                        onChange={(e, value) => {
                          setContainerKind(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Container Kind'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={containerTypes}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option}
                        // renderInput={params => <TextField {...params} label='Container Type' />}
                        value={containerType}
                        onChange={(e, value) => {
                          setContainerType(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Container Type'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={firstServiceNames}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option}
                        //renderInput={params => <TextField {...params} label='First Service Name' />}
                        value={firstServiceName}
                        onChange={(e, value) => {
                          setFirstServiceName(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'First Service Name'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={firstLineKeys}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        //renderInput={params => <TextField {...params} label='First Line Key' />}
                        value={firstLineKey}
                        onChange={(e, value) => {
                          setFirstLineKey(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'First Line Key'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={lastLineKeys}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        //renderInput={params => <TextField {...params} label='Last Line Key' />}
                        value={lastLineKey}
                        onChange={(e, value) => {
                          setLastLineKey(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Last Line Key'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={dischargeLines}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        //renderInput={params => <TextField {...params} label='Discharge Line' />}
                        value={dischargeLine}
                        onChange={(e, value) => {
                          setDischargeLine(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Discharge Line'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={departurePorts}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        renderInput={params => <TextField {...params} label='Departure Port' />}
                        value={departurePort}
                        onChange={(e, value) => {
                          setLastLineKey(departurePort)
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={loadPorts}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        renderInput={params => <TextField {...params} label='Load Port' />}
                        value={loadPort}
                        onChange={(e, value) => {
                          setLoadPort(value)
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={loadLines}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        //renderInput={params => <TextField {...params} label='Load Line' />}
                        value={loadLine}
                        onChange={(e, value) => {
                          setLoadLine(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Load Line'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Autocomplete
                        sx={{ width: 250 }}
                        options={goods}
                        id='autocomplete-outlined'
                        getOptionLabel={option => option.toString()}
                        //renderInput={params => <TextField {...params} label='Good' />}
                        value={good}
                        onChange={(e, value) => {
                          setGood(value)
                        }}
                        renderInput={params => (
                          <StyledTextField
                            {...params}
                            label={'Good'}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password'
                            }}
                            required={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      {/* <Autocomplete
                                            sx={{ width: 250 }}
                                            options={companies}
                                            id='autocomplete-outlined'
                                            open={true}
                                            getOptionLabel={option => option.toString()}
                                            //renderInput={params => <TextField {...params} label='Company' />}
                                            value={company}
                                            onChange={(e,value) =>{setCompany(value)}}
                                            renderInput={(params) => (
                                                <StyledTextField
                                                  {...params}
                                                  label={"Company"}
                                                  inputProps={{
                                                    ...params.inputProps,
                                                    autoComplete: "new-password"
                                                  }}
                                                  required={true}
                                                />
                                            )}
                                        /> */}
                      <VirtualizedAutoComplete
                        data={companies}
                        placeholder={'Company'}
                        value={company}
                        onChange={(e, value) => {
                          setCompany(value)
                        }}
                        required={true}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
          {waitingRequest && !showingResult && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h6' component='span' sx={{ fontSize: '1rem' }}>
                  Waiting for result
                </Typography>
              </Box>
            </>
          )}
          {!waitingRequest && showingResult && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <br />
                {model.modelJob === 'tday' && (
                  <Grid container>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='h6' sx={{ mr: 1.0 }}>
                          Prediction Result:
                        </Typography>
                        <Typography
                          variant='h5'
                          sx={{ mr: 1.5, color: parseFloat(predictionResult) >= 10 ? '#FF4C51' : '#56CA00' }}
                        >
                          {parseFloat(predictionResult).toFixed(2)} days dwell time
                        </Typography>{' '}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <RechartsWrapper>
                        <Box sx={{ height: 350, color: 'black' }}>
                          <ResponsiveContainer>
                            <AreaChart
                              height={350}
                              width={800}
                              data={tdayDistribution}
                              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                              <CartesianGrid opacity={0.5} />
                              <XAxis dataKey='tday' label={{ fill: 'white' }} />
                              <YAxis label={{ fill: 'white' }} />
                              <Tooltip content={CustomLineTooltip} />
                              <Area
                                type='monotone'
                                name='container count'
                                dataKey='count'
                                stroke='#8884d8'
                                fill='rgb(115, 103, 240)'
                              />
                              <Legend />
                              <ReferenceLine
                                x={parseFloat(predictionResult).toFixed(0)}
                                stroke={parseFloat(predictionResult) >= 10 ? '#FF4C51' : '#56CA00'}
                                //label="Current Prediction"
                                strokeWidth={3}
                              >
                                <Label
                                  value={'Current Prediction'}
                                  position={'insideTopLeft'}
                                  style={{
                                    fontSize: '80%',
                                    fill: parseFloat(predictionResult) >= 10 ? '#FF4C51' : '#56CA00'
                                  }}
                                />
                              </ReferenceLine>
                            </AreaChart>
                          </ResponsiveContainer>
                        </Box>
                      </RechartsWrapper>
                    </Grid>
                  </Grid>
                )}
                {model.modelJob === 'gumruk' && (
                  <Grid container>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography
                          variant='h5'
                          sx={{ mr: 1.5, color: parseInt(predictionResult) ? '#FF4C51' : '#56CA00' }}
                        >
                          Customs will {parseInt(predictionResult) ? '' : 'not'} check the container
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <RechartsWrapper>
                        <Box sx={{ height: 350, color: 'black' }}>
                          <ResponsiveContainer>
                            <BarChart
                              height={350}
                              width={800}
                              data={gumrukDistribution}
                              barSize={60}
                              margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                            >
                              <CartesianGrid opacity={0.5} />
                              <XAxis dataKey='checked' />
                              <YAxis />
                              <Tooltip content={CustomBarTooltip} />
                              <Legend />
                              <Bar name='container count' dataKey='count' fill='#8884d8' />
                              <ReferenceLine
                                x={parseInt(predictionResult) ? 'yes' : 'no'}
                                stroke={parseInt(predictionResult) ? '#FF4C51' : '#56CA00'}
                                //label="Current Prediction"
                                strokeWidth={3}
                              >
                                <Label
                                  value={'Current Prediction'}
                                  position={'insideTopLeft'}
                                  style={{ fontSize: '80%', fill: parseInt(predictionResult) ? '#FF4C51' : '#56CA00' }}
                                />
                              </ReferenceLine>
                            </BarChart>
                          </ResponsiveContainer>
                        </Box>
                      </RechartsWrapper>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ pt: 0, display: 'flex', justifyContent: 'center' }}>
          <Box className='demo-space-x'>
            {!waitingRequest && !showingResult && (
              <Button
                size='large'
                type='submit'
                variant='contained'
                onClick={mlPrediction}
                disabled={checkPredictionForm()}
              >
                Predict
              </Button>
            )}
            {!waitingRequest && showingResult && (
              <Button
                size='large'
                type='submit'
                variant='contained'
                onClick={() => {
                  setWaitingRequest(false)
                  setShowingResult(false)
                }}
              >
                Go Back
              </Button>
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MakePredictionDialog
