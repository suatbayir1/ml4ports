// ** React Imports
import React, { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'
import ReactJson from 'react-json-view'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import DialogActions from '@mui/material/DialogActions'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import toast from 'react-hot-toast'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { MLModelType } from 'src/types/components/mlTypes'
import { RootState, AppDispatch } from 'src/store'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Components Imports
import MachineLearningModelInfoCard from 'src/components/cards/advanced/MachineLearningModelInfoCard'
import FileUploaderRestrictions from 'src/components/forms/file-uploader/FileUploaderRestrictions'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { redeployModel } from 'src/store/apps/model'

interface IProps {
  open: boolean
  model: MLModelType
  handleClose: () => void
}

interface Metric {
  imgWidth: number
  imgHeight: number
  progress: number
  title: string
  color: string
  amount: string
  subtitle: string
  imgSrc: string
}

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const CustomInput = forwardRef((props: any, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label={props?.name} autoComplete='off' />
})

const Redeploy = (props: IProps) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** States
  const [trainer, setTrainer] = useState<string>('')
  const [algorithm, setAlgorithm] = useState<string>('')
  const [modelType, setModelType] = useState<string>('Single')
  const [modelName, setModelName] = useState<string>('')
  const [startDate, setStartDate] = useState<DateType>(null)
  const [endDate, setEndDate] = useState<DateType>(null)
  const [description, setDescription] = useState<string>('')
  const [metrics, setMetrics] = useState<Metric[]>([
    { imgWidth: 22, imgHeight: 20, progress: 0, title: '', color: '', amount: '', subtitle: '', imgSrc: '' }
  ])

  const [date, setDate] = useState<DateType>(null)
  const [language, setLanguage] = useState<string[]>([])
  const [values, setValues] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })
  const { open, model, handleClose } = props
  const [files, setFiles] = useState<File[]>([])
  const [metadata, setMetadata] = useState<string>('')

  // Handle Password
  const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }
  const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  // Handle Change
  const handleChangeMetricInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | SelectChangeEvent<string>>,
    index: number
  ) => {
    console.log(event.target.name)
    let tempMetrics: any[] = [...metrics]

    tempMetrics[index][event.target.name as keyof Metric] = event.target.value

    console.log(tempMetrics)

    setMetrics(tempMetrics)
  }

  const addNewMetric = () => {
    console.log(metrics)
    setMetrics([
      ...metrics,
      { imgWidth: 22, imgHeight: 20, progress: 0, title: '', color: '', amount: '', subtitle: '', imgSrc: '' }
    ])
  }

  const handleSubmit = async (): Promise<void> => {
    const metadata = {
      trainer,
      algorithm,
      modelType,
      modelName,
      startDate: startDate?.toString(),
      endDate: endDate?.toString(),
      description,
      metrics
    }

    if (files.length === 0) {
      toast.error('Please upload model file.')
      return
    }

    const formData = new FormData()
    var blob = files[0].slice(0, files[0].size, files[0].type)
    let newFile = new File([blob], files[0].name, { type: files[0].type })

    formData.append('file', newFile)

    console.log(formData)
    const payload = {
      id: model._id,
      metadata,
      formData
    }
    dispatch(redeployModel(payload))
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='md'>
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span'>
            Redeploy the {model.modelName}
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 4 }}>
          <Grid item xs={12}>
            <Card>
              <Divider sx={{ m: '0 !important' }} />
              <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        1. General Details
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label='Trainer'
                        placeholder='Suat Bayır'
                        value={trainer}
                        onChange={e => setTrainer(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Algorithm</InputLabel>
                        <Select
                          label='Algorithm'
                          defaultValue=''
                          value={algorithm}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                          onChange={e => setAlgorithm(e.target.value)}
                        >
                          <MenuItem value='LinearRegression'>Linear Regression</MenuItem>
                          <MenuItem value='KNN'>KNN</MenuItem>
                          <MenuItem value='SVM'>SVM</MenuItem>
                          <MenuItem value='DecisionTree'>Decision Tree</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Model Type</InputLabel>
                        <Select
                          label='Country'
                          defaultValue=''
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                          value={modelType}
                          onChange={e => setModelType(e.target.value)}
                        >
                          <MenuItem value='Single'>Single</MenuItem>
                          <MenuItem value='Ensemble'>Ensemble</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label='Model Name'
                        value={modelName}
                        onChange={e => setModelName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <DatePicker
                        selected={startDate}
                        showYearDropdown
                        showMonthDropdown
                        placeholderText='MM-DD-YYYY'
                        name={'Start Date'}
                        customInput={<CustomInput />}
                        id='form-layouts-separator-date'
                        onChange={(date: Date) => setStartDate(date)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <DatePicker
                        selected={endDate}
                        showYearDropdown
                        showMonthDropdown
                        placeholderText='MM-DD-YYYY'
                        name={'End Date'}
                        customInput={<CustomInput />}
                        id='form-layouts-separator-date'
                        onChange={(date: Date) => setEndDate(date)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        rows={3}
                        fullWidth
                        onChange={e => setDescription(e.target.value)}
                        label='Description'
                        placeholder='Description'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ mb: '0 !important' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        2. Metrics
                      </Typography>
                    </Grid>
                    {metrics.map((metric, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Grid item xs={12} sm={3}>
                            {/* <TextField
                              fullWidth
                              label='Title'
                              name='title'
                              placeholder='Leonard'
                              value={metric.title}
                              onChange={e => handleChangeMetricInput(e, index)}
                            /> */}
                            <FormControl fullWidth>
                              <InputLabel id='form-layouts-separator-select-label'>Title</InputLabel>
                              <Select
                                label='Title'
                                defaultValue=''
                                id='form-layouts-separator-select'
                                labelId='form-layouts-separator-select-label'
                                name={'title'}
                                value={metric.title}
                                onChange={e => handleChangeMetricInput(e, index)}
                              >
                                <MenuItem value='Accuracy'>Accuracy</MenuItem>
                                <MenuItem value='F1 Score'>F1 Score</MenuItem>
                                <MenuItem value='Recall'>Recall</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              fullWidth
                              label='Sub Title'
                              name='subtitle'
                              placeholder='Carter'
                              value={metric.subtitle}
                              onChange={e => handleChangeMetricInput(e, index)}
                            />
                          </Grid>
                          <Grid item xs={12} sm={2}>
                            <TextField
                              fullWidth
                              label='Progress'
                              type='number'
                              name='progress'
                              value={metric.progress}
                              onChange={e => handleChangeMetricInput(e, index)}
                            />
                          </Grid>{' '}
                          <Grid item xs={12} sm={2}>
                            <TextField
                              fullWidth
                              label='Amount'
                              name='amount'
                              placeholder='Carter'
                              value={metric.amount}
                              onChange={e => handleChangeMetricInput(e, index)}
                            />
                          </Grid>
                          <Grid item xs={12} sm={2}>
                            {/* <TextField
                              fullWidth
                              label='Color'
                              name='color'
                              placeholder='Carter'
                              value={metric.color}
                              onChange={e => handleChangeMetricInput(e, index)}
                            /> */}
                            <FormControl fullWidth>
                              <InputLabel id='form-layouts-separator-select-label'>Color</InputLabel>
                              <Select
                                label='Color'
                                defaultValue=''
                                id='form-layouts-separator-select'
                                labelId='form-layouts-separator-select-label'
                                name={'color'}
                                value={metric.color}
                                onChange={e => handleChangeMetricInput(e, index)}
                              >
                                <MenuItem value='primary'>Primary</MenuItem>
                                <MenuItem value='secondary'>Secondary</MenuItem>
                                <MenuItem value='info'>Info</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </React.Fragment>
                      )
                    })}
                    <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button size='large' type='submit' variant='contained' onClick={addNewMetric}>
                        Add Metric
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Card>
                        <CardHeader title={'Upload machine learning model'} />
                        <CardContent>
                          <FileUploaderRestrictions setFiles={setFiles} />
                        </CardContent>
                      </Card>
                    </Grid>
                    {modelType === 'Ensemble' && (
                      <>
                        <Grid item xs={12}>
                          <Divider sx={{ mb: '0 !important' }} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant='body2' sx={{ fontWeight: 600 }}>
                            3. Sub Models
                          </Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </CardContent>
              </form>
            </Card>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ pt: 0, display: 'flex', justifyContent: 'center' }}>
          <Box className='demo-space-x'>
            <Button size='large' type='submit' variant='contained' onClick={handleSubmit}>
              Submit
            </Button>
            <Button size='large' color='secondary' variant='outlined' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Redeploy
