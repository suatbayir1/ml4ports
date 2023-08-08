// ** React Imports
import React, { ChangeEvent, SyntheticEvent, forwardRef, MouseEvent, useState } from 'react'
import { NotificationManager } from 'react-notifications'
import { AppDispatch } from 'src/store'

// ** MUI Imports
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
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
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { MLModelType } from 'src/types/components/mlTypes'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Components Imports
import FileUploaderRestrictions from 'src/components/forms/file-uploader/FileUploaderRestrictions'

// ** Store & Actions Imports
import { useDispatch } from 'react-redux'
import { redeployModel } from 'src/store/apps/model'

interface IProps {
  open: boolean
  model: MLModelType
  handleClose: () => void
  type: 'main-model' | 'sub-model'
}

interface Metric {
  progress: number
  title: string
  color: string
  amount: string
  subtitle: string
}

interface Input {
  name: string
  description: string
}

interface Output {
  name: string
  description: string
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
  const [tab, setTab] = useState<string>('main-model')
  const [trainer, setTrainer] = useState<string>('')
  const [algorithm, setAlgorithm] = useState<string>('')
  const [modelType, setModelType] = useState<string>('Single')
  const [modelName, setModelName] = useState<string>('')
  const [startDate, setStartDate] = useState<DateType>(null)
  const [endDate, setEndDate] = useState<DateType>(null)
  const [description, setDescription] = useState<string>('')
  const [endpoint, setEndpoint] = useState<string>('')
  const [metrics, setMetrics] = useState<Metric[]>([{ progress: 0, title: '', color: '', amount: '', subtitle: '' }])
  const [inputs, setInputs] = useState<Input[]>([{ name: '', description: '' }])
  const [outputs, setOutputs] = useState<Output[]>([{ name: '', description: '' }])
  const { open, model, handleClose } = props
  const [files, setFiles] = useState<File[]>([])

  // Handle Change
  const handleTabsChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue)
  }

  const handleChangeMetricInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | SelectChangeEvent<string>>,
    index: number
  ) => {
    let tempMetrics: any[] = [...metrics]

    tempMetrics[index][event.target.name as keyof Metric] = event.target.value

    setMetrics(tempMetrics)
  }

  const handleChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | SelectChangeEvent<string>>,
    index: number
  ) => {
    let tempInputs: any[] = [...inputs]

    tempInputs[index][event.target.name as keyof Metric] = event.target.value

    setInputs(tempInputs)
  }

  const handleChangeOutputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | SelectChangeEvent<string>>,
    index: number
  ) => {
    let tempOutputs: any[] = [...outputs]

    tempOutputs[index][event.target.name as keyof Metric] = event.target.value

    setOutputs(tempOutputs)
  }

  const addNewMetric = () => {
    setMetrics([...metrics, { progress: 0, title: '', color: '', amount: '', subtitle: '' }])
  }

  const deleteMetric = (index: number) => {
    setMetrics(metric => metrics.filter((_, i) => i != index))
  }

  const deleteInput = (index: number) => {
    setInputs(input => inputs.filter((_, i) => i != index))
  }

  const deleteOutput = (index: number) => {
    setOutputs(output => outputs.filter((_, i) => i != index))
  }

  const addNewInput = () => {
    setInputs([...inputs, { name: '', description: '' }])
  }

  const addNewOutput = () => {
    setOutputs([...outputs, { name: '', description: '' }])
  }

  const handleSubmit = async (): Promise<void> => {
    if (files.length === 0) {
      NotificationManager.error('Please upload model file first', 'Error', 3000)
      return
    }

    if (
      trainer === '' ||
      algorithm === '' ||
      modelType === '' ||
      modelName === '' ||
      startDate === null ||
      endDate === null ||
      description === ''
    ) {
      NotificationManager.error(
        'Trainer, Algorithm, Model Type, Model Name, Start Date, End Date, Description cannot be empty',
        'Error',
        3000
      )
      return
    }

    for await (const metric of metrics) {
      if (metric.amount === '' || metric.color === '' || metric.title === '' || metric.subtitle === '') {
        NotificationManager.error('Please fill in the metrics completely', 'Error', 3000)
        return
      }
    }

    for await (const input of inputs) {
      if (input.name === '' || input.description === '') {
        NotificationManager.error('Please fill in the inputs completely', 'Error', 3000)
        return
      }
    }

    for await (const output of outputs) {
      if (output.name === '' || output.description === '') {
        NotificationManager.error('Please fill in the outputs completely', 'Error', 3000)
        return
      }
    }

    const formData = new FormData()
    var blob = files[0].slice(0, files[0].size, files[0].type)
    let newFile = new File([blob], files[0].name, { type: files[0].type })

    formData.append('file', newFile)

    const payload = {
      id: model._id,
      metadata: {
        tab,
        trainer,
        algorithm,
        modelType: tab === 'main-model' ? modelType : 'Single',
        modelName,
        startDate: startDate?.toString(),
        endDate: endDate?.toString(),
        description,
        endpoint,
        metrics,
        inputs,
        outputs,
        modelUrl: `${process.env.NEXT_PUBLIC_API_MODELS_URL}/${files[0].name}`
      },
      formData,
      handleClose
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
              <TabContext value={tab}>
                <TabList
                  variant='scrollable'
                  scrollButtons={false}
                  onChange={handleTabsChange}
                  sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
                >
                  <Tab value='main-model' label='Main Model' />
                  {model.modelType === 'Ensemble' && <Tab value='sub-model' label='Sub Model' />}
                </TabList>
                <Divider sx={{ m: '0 !important' }} />
                <form onSubmit={e => e.preventDefault()}>
                  <CardContent>
                    <TabPanel value='main-model'>
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
                              <MenuItem value='XGBoost'>XGBoost</MenuItem>
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
                              {props.type === 'main-model' && <MenuItem value='Ensemble'>Ensemble</MenuItem>}
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
                        <Grid item xs={6}>
                          <TextField
                            multiline
                            rows={3}
                            fullWidth
                            onChange={e => setDescription(e.target.value)}
                            label='Description'
                            placeholder='Description'
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            multiline
                            rows={3}
                            fullWidth
                            onChange={e => setEndpoint(e.target.value)}
                            label='Endpoint'
                            placeholder='Endpoint'
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
                                <TextField
                                  fullWidth
                                  label='Title'
                                  name='title'
                                  value={metric.title}
                                  onChange={e => handleChangeMetricInput(e, index)}
                                />
                                {/* <FormControl fullWidth>
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
                                </FormControl> */}
                              </Grid>
                              <Grid item xs={12} sm={2}>
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
                              <Grid item xs={12} sm={1}>
                                <FormControl fullWidth>
                                  <IconButton
                                    onClick={() => {
                                      deleteMetric(index)
                                    }}
                                    aria-label='capture screenshot'
                                    color='error'
                                  >
                                    <Icon icon='mdi:close' />
                                  </IconButton>
                                </FormControl>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Button size='large' type='submit' variant='contained' onClick={addNewMetric}>
                            Add Metric
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant='body2' sx={{ fontWeight: 600 }}>
                            3. Input & Output
                          </Typography>
                        </Grid>
                        {inputs.map((input, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Grid item xs={12} sm={3}>
                                <TextField
                                  fullWidth
                                  label='Name'
                                  name='name'
                                  placeholder=''
                                  value={input.name}
                                  onChange={e => handleChangeInputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <TextField
                                  fullWidth
                                  label='Description'
                                  name='description'
                                  placeholder=''
                                  value={input.description}
                                  onChange={e => handleChangeInputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <FormControl fullWidth>
                                  <IconButton
                                    onClick={() => {
                                      deleteInput(index)
                                    }}
                                    aria-label='capture screenshot'
                                    color='error'
                                  >
                                    <Icon icon='mdi:close' />
                                  </IconButton>
                                </FormControl>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Button size='large' type='submit' variant='contained' onClick={addNewInput}>
                            Add Input
                          </Button>
                        </Grid>
                        {outputs.map((output, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Grid item xs={12} sm={3}>
                                <TextField
                                  fullWidth
                                  label='Name'
                                  name='name'
                                  placeholder=''
                                  value={output.name}
                                  onChange={e => handleChangeOutputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <TextField
                                  fullWidth
                                  label='Description'
                                  name='description'
                                  placeholder=''
                                  value={output.description}
                                  onChange={e => handleChangeOutputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <FormControl fullWidth>
                                  <IconButton
                                    onClick={() => {
                                      deleteOutput(index)
                                    }}
                                    aria-label='capture screenshot'
                                    color='error'
                                  >
                                    <Icon icon='mdi:close' />
                                  </IconButton>
                                </FormControl>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Button size='large' type='submit' variant='contained' onClick={addNewOutput}>
                            Add Output
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
                      </Grid>
                    </TabPanel>
                    <TabPanel value='sub-model'>
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
                              <MenuItem value='XGBoost'>XGBoost</MenuItem>
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
                              value={'Single'}
                              disabled
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
                        <Grid item xs={6}>
                          <TextField
                            multiline
                            rows={3}
                            fullWidth
                            onChange={e => setDescription(e.target.value)}
                            label='Description'
                            placeholder='Description'
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            multiline
                            rows={3}
                            fullWidth
                            onChange={e => setEndpoint(e.target.value)}
                            label='Endpoint'
                            placeholder='Endpoint'
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
                              <Grid item xs={12} sm={2}>
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
                              <Grid item xs={12} sm={1}>
                                <FormControl fullWidth>
                                  <IconButton
                                    onClick={() => {
                                      deleteMetric(index)
                                    }}
                                    aria-label='capture screenshot'
                                    color='error'
                                  >
                                    <Icon icon='mdi:close' />
                                  </IconButton>
                                </FormControl>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Button size='large' type='submit' variant='contained' onClick={addNewMetric}>
                            Add Metric
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant='body2' sx={{ fontWeight: 600 }}>
                            3. Input & Output
                          </Typography>
                        </Grid>
                        {inputs.map((input, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Grid item xs={12} sm={3}>
                                <TextField
                                  fullWidth
                                  label='Name'
                                  name='name'
                                  placeholder=''
                                  value={input.name}
                                  onChange={e => handleChangeInputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <TextField
                                  fullWidth
                                  label='Description'
                                  name='description'
                                  placeholder=''
                                  value={input.description}
                                  onChange={e => handleChangeInputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <FormControl fullWidth>
                                  <IconButton
                                    onClick={() => {
                                      deleteInput(index)
                                    }}
                                    aria-label='capture screenshot'
                                    color='error'
                                  >
                                    <Icon icon='mdi:close' />
                                  </IconButton>
                                </FormControl>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Button size='large' type='submit' variant='contained' onClick={addNewInput}>
                            Add Input
                          </Button>
                        </Grid>
                        {outputs.map((output, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Grid item xs={12} sm={3}>
                                <TextField
                                  fullWidth
                                  label='Name'
                                  name='name'
                                  placeholder=''
                                  value={output.name}
                                  onChange={e => handleChangeOutputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <TextField
                                  fullWidth
                                  label='Description'
                                  name='description'
                                  placeholder=''
                                  value={output.description}
                                  onChange={e => handleChangeOutputs(e, index)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <FormControl fullWidth>
                                  <IconButton
                                    onClick={() => {
                                      deleteOutput(index)
                                    }}
                                    aria-label='capture screenshot'
                                    color='error'
                                  >
                                    <Icon icon='mdi:close' />
                                  </IconButton>
                                </FormControl>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Button size='large' type='submit' variant='contained' onClick={addNewOutput}>
                            Add Output
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
                      </Grid>
                    </TabPanel>
                  </CardContent>
                </form>
              </TabContext>
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
