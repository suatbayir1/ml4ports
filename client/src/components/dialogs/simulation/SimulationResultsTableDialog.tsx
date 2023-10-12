import React, { useState, useEffect, Fragment, SyntheticEvent, forwardRef } from 'react'
import {v4} from 'uuid'

// ** MUI Imports
import {
  CircularProgress, Dialog, DialogTitle, DialogContent, Typography,
  TableRow, TableHead, TableBody, TableCell, IconButton,
  TableContainer, Grid, Table, Collapse, Box, Card,
  CardContent, Paper, Tab, TableSortLabel, Fab,
  FormControl, InputLabel, Select, MenuItem, Checkbox,
  ListItemText, TextField, Tooltip
} from '@mui/material'
import {TabList, TabPanel, TabContext} from '@mui/lab'
import { visuallyHidden } from '@mui/utils'

// ** Third Party Imports
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import * as XLSX from 'xlsx'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

const maxContainerCount = 10_000

const containerTypes = ["20", "40", "40 HC", "45 HC"]

const containerStatus = ["Dolu", "Boş"]

const containerRegimes = ["İthalat", "İhracat", "Transit", "Tekrar Sevk"]

interface RowType {
    container_key: number
    steps: StepType[]
}
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
    port_occupancy?: string 
}

const calculateTimeDifference = (a: string, b: string) => {
    const differenceInMilliseconds = new Date(b).getTime() - new Date(a).getTime()
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000)
    const days = Math.floor(differenceInSeconds / (3600 * 24))
    const hours = Math.floor((differenceInSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((differenceInSeconds % 3600) / 60)
    const seconds = differenceInSeconds % 60
    let result = ""
    if(days){
        result += `${days} days`
    }
    if(hours){
        if(result.length){
            result += ", "
        }
        result += `${hours} hours`
    }
    if(minutes){
        if(result.length){
            result += ", "
        }
        result += `${minutes} minutes`
    }
    if(seconds){
        if(result.length){
            result += ", "
        }
        result += `${seconds} seconds`
    }
    return result
}

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

const CustomInput = forwardRef((props: PickerProps, ref) => {
  const startDate = format(props.start, 'dd-MM-yyyy HH:mm:ss')
  const endDate = props.end !== null ? ` - ${format(props.end, 'dd-MM-yyyy HH:mm:ss')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`

  return <TextField inputRef={ref} label={props.label || ''} {...props} value={value} />
})

const Filters = (props: {containerTypesFilter: string[], setContainerTypesFilter: any, containerRegimesFilter: string[], 
        setContainerRegimesFilter: any, containerStatusFilter: string[], setContainerStatusFilter: any,
        startDate: DateType, endDate: DateType, handleOnChange: any, popperPlacement: any, createXLSX: any,}) => {
  const {containerTypesFilter, setContainerTypesFilter, containerRegimesFilter, 
    setContainerRegimesFilter,containerStatusFilter, setContainerStatusFilter,
    startDate, endDate, handleOnChange, popperPlacement, createXLSX} = props
  return(
    <Fragment>
      <Grid item xs={3} sm={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-multiple-checkbox-label'>Container Types</InputLabel>
          <Select
              multiple
              label='Tag'
              value={containerTypesFilter}
              //MenuProps={MenuProps}
              onChange={(event) => {setContainerTypesFilter(event.target.value as string[])}}
              id='demo-multiple-checkbox'
              labelId='demo-multiple-checkbox-label'
              renderValue={selected => (selected as unknown as string[]).join(', ')}
          >
              {containerTypes.map(ctype => (
              <MenuItem key={ctype} value={ctype}>
                  <Checkbox checked={containerTypesFilter.indexOf(ctype) > -1} />
                  <ListItemText primary={ctype} />
              </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} sm={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-multiple-checkbox-label'>Container Regime</InputLabel>
          <Select
              multiple
              label='Tag'
              value={containerRegimesFilter}
              //MenuProps={MenuProps}
              onChange={(event) => {setContainerRegimesFilter(event.target.value as string[])}}
              id='demo-multiple-checkbox'
              labelId='demo-multiple-checkbox-label'
              renderValue={selected => (selected as unknown as string[]).join(', ')}
          >
              {containerRegimes.map(cregime => (
              <MenuItem key={cregime} value={cregime}>
                  <Checkbox checked={containerRegimesFilter.indexOf(cregime) > -1} />
                  <ListItemText primary={cregime} />
              </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} sm={2}>
        <FormControl fullWidth>
          <InputLabel id='demo-multiple-checkbox-label'>Container Status</InputLabel>
          <Select
              multiple
              label='Tag'
              value={containerStatusFilter}
              //MenuProps={MenuProps}
              onChange={(event) => {setContainerStatusFilter(event.target.value as string[])}}
              id='demo-multiple-checkbox'
              labelId='demo-multiple-checkbox-label'
              renderValue={selected => (selected as unknown as string[]).join(', ')}
          >
              {containerStatus.map(cstatus => (
              <MenuItem key={cstatus} value={cstatus}>
                  <Checkbox checked={containerStatusFilter.indexOf(cstatus) > -1} />
                  <ListItemText primary={cstatus} />
              </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} sm={3}>
        <DatePicker
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleOnChange}
          shouldCloseOnSelect={false}
          popperPlacement={popperPlacement}
          customInput={
            <CustomInput label='Date Range' start={startDate as Date | number} end={endDate as Date | number} />
          }
        />
      </Grid>
      <Grid item xs={1} sm={1}>
        <Tooltip arrow title={"Export as XLSX"} placement='top'>
          <Fab color='primary' aria-label='add' size='small' sx={{ '& svg': { mr: 1 } }}>
            <Icon icon='uil:export' style={{margin: "0px"}} onClick={()=>createXLSX()}/>
          </Fab>
        </Tooltip>        
      </Grid>
    </Fragment>
  )
}
const Row = (props: { row: RowType, filterFunction: any }) => {
    // ** Props
    const { row, filterFunction } = props
    // ** State
    const [open, setOpen] = useState<boolean>(false)

    const stepsFiltered = filterFunction(row.steps)
    
    if(stepsFiltered.length){
      return (
        <Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell size='small' style={{width: "50px"}}>
                  <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
                  <Icon icon={open ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
                  </IconButton>
              </TableCell>
              <TableCell component='th' scope='row'>
                  Container No: {row.container_key}
              </TableCell>
              <TableCell component='th' scope='row'>{row.steps[0].job}</TableCell>
              <TableCell component='th' scope='row'>{row.steps[0].container_type}</TableCell>
              <TableCell component='th' scope='row'>{row.steps[0].first_container_status}</TableCell>
              <TableCell component='th' scope='row'>{calculateTimeDifference(row.steps[0].success_datetime, row.steps[row.steps.length-1].success_datetime)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={6} sx={{ py: '0 !important' }}>
              <Collapse in={open} timeout='auto' unmountOnExit>
                <Box sx={{ m: 2 }}>
                  {/* <Typography variant='h6' gutterBottom component='div'>
                    History
                  </Typography> */}
                  <Table size='small' aria-label='container-specific'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Container Type</TableCell>
                        <TableCell>Container Regime</TableCell>
                        <TableCell>Container Status</TableCell>
                        <TableCell align='right'>Job</TableCell>
                        <TableCell align='right'>Parent Job</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {stepsFiltered.map((oneJob: StepType) => (
                        <TableRow key={v4()}>
                          <TableCell>{oneJob.job_order}</TableCell>
                          <TableCell component='th' scope='row'>
                            {oneJob.success_datetime}
                          </TableCell>
                          <TableCell>{oneJob.container_type}</TableCell>
                          <TableCell>{oneJob.current_container_regime}</TableCell>
                          <TableCell>{oneJob.current_container_status}</TableCell>
                          <TableCell align='right'>{oneJob.job}</TableCell>
                          <TableCell align='right'>{oneJob.parent_job}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </Fragment>
      )
    }
    else{
      return(
        <Fragment></Fragment>
      )
    }
}

interface IProps {
  open: boolean
  handleClose: () => void
  steps: RowType[]
  allResults: StepType[]
  waitingResult: boolean
  currentContainerCount: number
  popperPlacement: any
}

type Order = 'asc' | 'desc'

interface SortKeys {
  job_order: number
  success_datetime: string
  container_key: number
}

const SimulationResultsTableDialog = (props: IProps) => {
  const { open, handleClose, steps, allResults, waitingResult, currentContainerCount, popperPlacement } = props

  const [selectedTab, setSelectedTab] = useState<string>('Container')
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof SortKeys>('success_datetime')

  // table filters states
  const [containerTypesFilter, setContainerTypesFilter] = useState<string[]>(containerTypes)
  const [containerStatusFilter, setContainerStatusFilter] = useState<string[]>(containerStatus)
  const [containerRegimesFilter, setContainerRegimesFilter] = useState<string[]>(containerRegimes)
  // date range picker states
  const [startDate, setStartDate] = useState<DateType>(new Date())
  const [endDate, setEndDate] = useState<DateType>(null) //addDays(new Date(), 30)

  // add port occupancy to allResults
  const calculateContainerCountAtDate = (date: string, data: RowType[]) => {
    let count = 0
    for(let cont of data){
      let lastJobDate = new Date(cont.steps[cont.steps.length-1].success_datetime)
      let selectedDate = new Date(date)
      if(selectedDate.getTime()<lastJobDate.getTime()){
        count += 1
      }
    }
    return count
  }

  const allResultsOcc = allResults.map(oneJob=>{
    oneJob["port_occupancy"] = (((currentContainerCount+calculateContainerCountAtDate(oneJob.success_datetime, steps))/maxContainerCount)*100).toFixed(2)
    return oneJob
  })

  const filterContainerSpecificTable = () => {
    let filteredRows: StepType[] = []
    for(let row of steps){
      let jobs = row.steps
      filteredRows = filteredRows.concat(filterTable(jobs))
    }
    return filteredRows
  }

  const createXLSX = () => {
    let filteredData: any[] = []
    if(selectedTab==="Time"){
      filteredData = stableSort(filterTable(allResultsOcc), getComparator(order, orderBy))
    }
    else{
      filteredData = filterContainerSpecificTable()
    }
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filteredData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `container-records-${new Date().toISOString()}.xlsx`);
  }


  const handleOnChangeDate = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof SortKeys) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const createSortHandler = (property: keyof SortKeys) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property)
  }

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setContainerRegimesFilter(containerRegimes)
    setContainerStatusFilter(containerStatus)
    setContainerTypesFilter(containerTypes)
    setStartDate(new Date())
    setEndDate(null)
    setSelectedTab(newValue)
  }

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
  
    return 0
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  const filterTable = (rows: StepType[]): StepType[] => {
    let filteredRows = rows.filter(item => {
      if(containerTypesFilter.includes(item.container_type)){
        if(containerRegimesFilter.includes(item.current_container_regime)){
          if(containerStatusFilter.includes(item.current_container_status)){
            if(startDate !== null && startDate !== undefined && endDate !== null && endDate !== undefined){
              let rowDate = new Date(item.success_datetime).getTime()
              if(rowDate >= startDate.getTime() && rowDate <= endDate.getTime()){
                return true
              }
              return false
            }
            return true
          }
          return false
        }
        return false
      }
      return false
    })
    return filteredRows
  }

  function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
  
      return a[1] - b[1]
    })
  
    return stabilizedThis.map(el => el[0])
  }

  useEffect(() => {
  }, [])

  /* useEffect(() => {
    groupYardGroupData(allContainersData)
  }, [allContainersData, selectedColumns]) */

  return (
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='lg'>
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
            <Typography variant='h6' component='span'>
              Simulation Results
            </Typography>
        </DialogTitle>
        <TabContext value={selectedTab}>
            <TabList onChange={handleTabChange} aria-label='simple tabs example'>
                <Tab value='Container' label='Container Specific' />
                <Tab value='Time' label='Time Sorted' />
            </TabList>
            <TabPanel value='Container'>
                <DialogContent sx={{ p: 4 }}>
                    <IconButton
                        size='small'
                        onClick={() => handleClose()}
                        sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                    >
                        <Icon icon='mdi:close' />
                    </IconButton>
                    <DatePickerWrapper>
                      <Grid container spacing={6}>
                          {/* <Grid item xs={12} sm={12}>
                            <Fab variant='extended' color='primary' aria-label='add' size='small' sx={{ '& svg': { mr: 1 } }}>
                              <Icon icon='tabler:filter-filled' />
                                Filters
                            </Fab>
                          </Grid> */}
                          <Filters 
                            containerTypesFilter={containerTypesFilter} 
                            setContainerTypesFilter={setContainerTypesFilter} 
                            containerRegimesFilter={containerRegimesFilter} 
                            setContainerRegimesFilter={setContainerRegimesFilter}
                            containerStatusFilter={containerStatusFilter} 
                            setContainerStatusFilter={setContainerStatusFilter}
                            startDate={startDate}
                            endDate={endDate}
                            handleOnChange={handleOnChangeDate}
                            popperPlacement={popperPlacement}
                            createXLSX={createXLSX}
                          />
                          <Grid item xs={12} sm={12}>
                              <Card>
                                  <CardContent>
                                      <div>
                                          {waitingResult ? (
                                              <>
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                  <CircularProgress />
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                  <Typography variant='h6' component='span' sx={{ fontSize: '1rem' }}>
                                                    Waiting for results
                                                  </Typography>
                                                </Box>
                                              </>
                                          ) : (
                                              <TableContainer component={Paper}>
                                                  <Table aria-label='collapsible table'>
                                                      <TableHead>
                                                      <TableRow>
                                                          <TableCell/>
                                                          <TableCell>Container #</TableCell>
                                                          <TableCell>First Job</TableCell>
                                                          <TableCell>Container Type</TableCell>
                                                          <TableCell>First Status</TableCell>
                                                          <TableCell>Total Time Spent</TableCell>
                                                      </TableRow>
                                                      </TableHead>
                                                      <TableBody>
                                                          {steps.map(row => (
                                                              <Row key={v4()} row={row} filterFunction={filterTable}/>
                                                          ))}
                                                      </TableBody>
                                                  </Table>
                                              </TableContainer>
                                          )}
                                      </div>
                                  </CardContent>
                              </Card>
                          </Grid>
                      </Grid>
                    </DatePickerWrapper>
                </DialogContent>
            </TabPanel>
            <TabPanel value='Time'>
                <DialogContent sx={{ p: 4 }}>
                    <IconButton
                        size='small'
                        onClick={() => handleClose()}
                        sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                    >
                        <Icon icon='mdi:close' />
                    </IconButton>
                    <DatePickerWrapper>
                      <Grid container spacing={1}>
                          {/* <Grid item xs={2} sm={2}>
                            <Fab variant='extended' color='primary' aria-label='add' size='small' sx={{ '& svg': { mr: 1 } }}>
                              <Icon icon='tabler:filter-filled' />
                                Filters
                            </Fab>
                          </Grid> */}
                          <Filters 
                            containerTypesFilter={containerTypesFilter} 
                            setContainerTypesFilter={setContainerTypesFilter} 
                            containerRegimesFilter={containerRegimesFilter} 
                            setContainerRegimesFilter={setContainerRegimesFilter}
                            containerStatusFilter={containerStatusFilter} 
                            setContainerStatusFilter={setContainerStatusFilter}
                            startDate={startDate}
                            endDate={endDate}
                            handleOnChange={handleOnChangeDate}
                            popperPlacement={popperPlacement}
                            createXLSX={createXLSX}
                          />
                          <Grid item xs={12} sm={12}>
                              <Card>
                                  <CardContent>
                                      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                                          <Table stickyHeader size='small' aria-label='time-sorted'>
                                              <TableHead>
                                                  <TableRow>
                                                    <TableCell
                                                      key={"container_key"}
                                                      align={'left'}
                                                      padding={'normal'}
                                                      sortDirection={orderBy === "container_key" ? order : false}
                                                    >
                                                      <TableSortLabel
                                                          active={orderBy === "container_key"}
                                                          onClick={createSortHandler("container_key")}
                                                          direction={orderBy === "container_key" ? order : 'asc'}
                                                      >
                                                          Container No
                                                      {orderBy === "container_key" ? (
                                                          <Box component='span' sx={visuallyHidden}>
                                                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                          </Box>
                                                      ) : null}
                                                      </TableSortLabel>
                                                    </TableCell>
                                                    {/* <TableCell>Container No</TableCell> */}
                                                    {/* <TableCell>Job Order</TableCell> */}
                                                    <TableCell
                                                      key={"job_order"}
                                                      align={'left'}
                                                      padding={'normal'}
                                                      sortDirection={orderBy === "job_order" ? order : false}
                                                    >
                                                      <TableSortLabel
                                                        active={orderBy === "job_order"}
                                                        onClick={createSortHandler("job_order")}
                                                        direction={orderBy === "job_order" ? order : 'asc'}
                                                      >
                                                        Job Order
                                                      {orderBy === "job_order" ? (
                                                          <Box component='span' sx={visuallyHidden}>
                                                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                          </Box>
                                                      ) : null}
                                                      </TableSortLabel>
                                                    </TableCell>
                                                    <TableCell
                                                      key={"success_datetime"}
                                                      align={'left'}
                                                      padding={'normal'}
                                                      sortDirection={orderBy === "success_datetime" ? order : false}
                                                    >
                                                      <TableSortLabel
                                                        active={orderBy === "success_datetime"}
                                                        onClick={createSortHandler("success_datetime")}
                                                        direction={orderBy === "success_datetime" ? order : 'asc'}
                                                      >
                                                        Date
                                                      {orderBy === "success_datetime" ? (
                                                          <Box component='span' sx={visuallyHidden}>
                                                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                          </Box>
                                                      ) : null}
                                                      </TableSortLabel>
                                                    </TableCell>
                                                    <TableCell>Container Type</TableCell>
                                                    <TableCell>Container Regime</TableCell>
                                                    <TableCell>Container Status</TableCell>
                                                    <TableCell align='right'>Job</TableCell>
                                                    <TableCell align='right'>Parent Job</TableCell>
                                                    <TableCell align='right'>Port Occupancy</TableCell>
                                                  </TableRow>
                                              </TableHead>
                                              <TableBody>
                                                  {stableSort(filterTable(allResultsOcc), getComparator(order, orderBy)).map(oneJob => (
                                                      <TableRow key={v4()}>
                                                          <TableCell>{oneJob.container_key}</TableCell>
                                                          <TableCell>{oneJob.job_order}</TableCell>
                                                          <TableCell component='th' scope='row'>
                                                            {oneJob.success_datetime}
                                                          </TableCell>
                                                          <TableCell>{oneJob.container_type}</TableCell>
                                                          <TableCell>{oneJob.current_container_regime}</TableCell>
                                                          <TableCell>{oneJob.current_container_status}</TableCell>
                                                          <TableCell align='right'>{oneJob.job}</TableCell>
                                                          <TableCell align='right'>{oneJob.parent_job}</TableCell>
                                                          <TableCell align='right'>{oneJob.port_occupancy}</TableCell>
                                                      </TableRow>
                                                  ))}
                                              </TableBody>
                                          </Table>
                                      </TableContainer>
                                  </CardContent>
                              </Card>
                          </Grid>
                      </Grid>
                    </DatePickerWrapper>
                </DialogContent>
            </TabPanel>
        </TabContext>
        

        
        {/* <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 1 }} onClick={updateSimulationConfiguration}>
            Update
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions> */}
      </Dialog>
  )
}

export default SimulationResultsTableDialog