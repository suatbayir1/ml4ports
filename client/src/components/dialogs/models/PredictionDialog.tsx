// ** React
import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from 'src/store'

// ** MUI Imports
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Grid,
  TextField,
  Button,
  Box,
  DialogActions
} from '@mui/material'
import { styled } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { MLModelType } from 'src/types/components/mlTypes'

// ** Store Actions
import { predict, setWaitingRequest, setShowingResult } from 'src/store/apps/model'
import { useDispatch, useSelector } from 'react-redux'

// ** Components
import WaitingResultLoader from 'src/components/forms/loaders/WaitingResultLoader'
import PredictionsOnAreaChart from 'src/components/charts/predict/recharts/PredictionsOnAreaChart'
import PredictionsOnBarChart from 'src/components/charts/predict/recharts/PredictionsOnBarChart'

interface IProps {
  open: boolean
  model: MLModelType
  handleClose: () => void
}

interface FormInput {
  name: string
  value: any
}

const ChartComponent = (model: MLModelType): JSX.Element => {
  switch (model.modelName) {
    case '5 Gün Gemi Sayısı Tahmini':
    case '7 Gün Gemi Sayısı Tahmini':
    case '15 Gün Gemi Sayısı Tahmini':
    case '30 Gün Gemi Sayısı Tahmini':
    case '60 Gün Gemi Sayısı Tahmini':
      return <PredictionsOnBarChart model={model} />
    default:
      return <PredictionsOnAreaChart model={model} />
  }
}

const PredictionDialog = (props: IProps) => {
  const { open, handleClose, model } = props

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.model)

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
  // const [waitingRequest, setWaitingRequest] = useState<boolean>(false)
  // const [showingResult, setShowingResult] = useState<boolean>(false)
  const [predictionResult, setPredictionResult] = useState<string>('')
  const [values, setValues] = useState<FormInput[]>([])

  useEffect(() => {
    const valuesDict = model.inputs.map(input => ({ name: input.name, value: '' }))
    setValues(valuesDict)

    return () => {}
  }, [open])

  const changeInput = (e: any, idx: number) => {
    let newArr = [...values]
    newArr[idx]['value'] = e.target.value
    setValues(newArr)
  }

  const makePredict = async () => {
    dispatch(setWaitingRequest(true))

    const object = values.reduce((obj, item) => Object.assign(obj, { [item.name]: item.value }), {})

    const payload = {
      endpoint: model.endpoint,
      payload: object
    }

    dispatch(predict(payload))
  }

  return (
    <div>
      <Dialog
        onClose={() => {
          handleClose()
          dispatch(setWaitingRequest(false))
          dispatch(setShowingResult(false))
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
              dispatch(setWaitingRequest(false))
              dispatch(setShowingResult(false))
            }}
            sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 4 }}>
          {!store.waitingRequest && !store.showingResult && (
            <>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={6}>
                  {values.map((input, idx) => (
                    <Grid item xs={12} sm={3}>
                      <TextField
                        fullWidth
                        label={input.name}
                        name={input.name}
                        value={input.value}
                        onChange={e => changeInput(e, idx)}
                        InputLabelProps={{ shrink: true }}
                        required={true}
                      />
                    </Grid>
                  ))}
                </Grid>
              </form>
            </>
          )}
          {store.waitingRequest && !store.showingResult && <WaitingResultLoader />}

          {!store.waitingRequest && store.showingResult && ChartComponent(model)}
        </DialogContent>
        <DialogActions sx={{ pt: 0, display: 'flex', justifyContent: 'center' }}>
          <Box className='demo-space-x'>
            {!store.waitingRequest && !store.showingResult && (
              <Button size='large' type='submit' variant='contained' onClick={makePredict}>
                Predict
              </Button>
            )}
            {!store.waitingRequest && store.showingResult && (
              <Button
                size='large'
                type='submit'
                variant='contained'
                onClick={() => {
                  dispatch(setWaitingRequest(false))
                  dispatch(setShowingResult(false))
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

export default PredictionDialog
