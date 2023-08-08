import React, { useState, useEffect } from 'react'

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
  Card,
  CardContent,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  Chip,
  Divider
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme, styled } from '@mui/material/styles'
import { GridProps } from '@mui/material/Grid'

// ** Third Party Component Imports
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts'
import { ApexOptions } from 'apexcharts'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Axios Imports
import axios, { AxiosError } from 'axios'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Styled Components
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import RechartsWrapper from 'src/@core/styles/libs/recharts'

import ReactApexcharts from 'src/@core/components/react-apexcharts'
import CustomInput from 'src/views/forms/form-elements/pickers/PickersCustomInput'

const chartData = [
  { value: 50 },
  { value: 30 },
  { value: 100 },
  { value: 75 },
  { value: 40 },
  { value: 75 },
  { value: 20 }
]

const containerStatusMap = {
  '1': 'Dolu',
  '2': 'Boş'
}

const containerTypeMap = {
  '31': '20',
  '32': '40',
  '35': '45 HC',
  '37': '40 HC'
}

const containerRegimeMap = {
  '1': 'İthalat',
  '2': 'Transit',
  '4': 'İhracat',
  '20': 'Tekrar Sevk'
}

const fieldMap = {
  'Container Type': {
    '31': '20',
    '32': '40',
    '35': '45 HC',
    '37': '40 HC'
  },
  'Container Status': {
    '1': 'Dolu',
    '2': 'Boş'
  },
  Regime: {
    '1': 'İthalat',
    '2': 'Transit',
    '4': 'İhracat',
    '20': 'Tekrar Sevk'
  }
}

const columnMap = {
  'Container Status': Object.keys(containerStatusMap),
  'Container Type': Object.keys(containerTypeMap),
  Regime: Object.keys(containerRegimeMap)
}

const yardGroupNames = ['Rıhtım Saha Grubu', 'İstif Saha Grubu', 'CFS Saha Grubu', 'Dış Saha Grubu']

const yardGroupsColumns = ['Container Status', 'Container Type', 'Regime']

const yardGroupsColumnsMap = {
  'Container Status': 'CONTAINER_STATUS_KEY',
  'Container Type': 'CONTAINER_TYPE_KEY',
  Regime: 'REGIME_KEY'
}
// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const combinationColors2 = ['#f44336']

const combinationColors = [
  '#FF5733',
  '#33FFB8',
  '#D433FF',
  '#33FFA1',
  '#FF33F9',
  '#33C3FF',
  '#FFA533',
  '#33FF6E',
  '#8833FF',
  '#33FFC7',
  '#FF33A6',
  '#33FFD9',
  '#FFB033',
  '#33FF8F',
  '#B033FF',
  '#33FFF6',
  '#FF336D',
  '#33FFEA',
  '#FF6C33',
  '#33FFF1',
  '#E033FF',
  '#33FF9D',
  '#FF33D0',
  '#33FFBE',
  '#C033FF',
  '#33FFE0',
  '#FF3333',
  '#33FFEC',
  '#FF8F33',
  '#33FFF4',
  '#FF33B3',
  '#33FFD6',
  '#FF9F33',
  '#33FFF8',
  '#FF33E3',
  '#33FFC1'
]

const CustomTooltip = (data: TooltipProps<any, any>) => {
  const { active, payload } = data

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label}</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            if (i.payload[i.dataKey]) {
              return (
                <Box
                  sx={{ display: 'flex', alignItems: 'center', '& svg': { color: i.fill, mr: 2.5 } }}
                  key={i.dataKey}
                >
                  <Icon icon='mdi:circle' fontSize='0.6rem' />
                  <Typography variant='body2'>{`${i.dataKey} : ${i.payload[i.dataKey]}`}</Typography>
                </Box>
              )
            }
          })}
      </div>
    )
  }

  return null
}

interface IProps {
  open: boolean
  handleClose: () => void
}

const PortsDailyStatusDialog = (props: IProps) => {
  const { open, handleClose } = props
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement: ReactDatePickerProps['popperPlacement'] = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  // "2022-09-10"
  const [date, setDate] = useState<DateType>(new Date(new Date().toISOString().substring(0, 10)))
  const [selectedColumns, setSelectedColumns] = useState<string[]>(['Container Type'])

  const [totalContainerCount, setTotalContainerCount] = useState<number>(0)
  const [containerStatusData, setContainerStatusData] = useState<number[]>([0, 0])
  const [containerTypeData, setContainerTypeData] = useState<number[]>([0, 0, 0, 0])
  const [containerRegimeData, setContainerRegimeData] = useState<number[]>([0, 0, 0, 0])

  const [allContainersData, setAllContainersData] = useState<any[]>([])
  const [yardGroupsSeries, setYardGroupsSeries] = useState<any[]>([])
  const [combinationFieldNames, setCombinationFieldNames] = useState<string[]>([
    'Container Type: 31',
    'Container Type: 32',
    'Container Type: 35',
    'Container Type: 37'
  ])

  const checkKeyExist = (dict: any, key: string): any => {
    if (key in dict) {
      return dict[key]
    }
    return 0
  }

  const getCombinations = (arrays, keyNames) => {
    const result = []
    const totalArrays = arrays.length

    function generateCombinations(currentCombination, currentIndex) {
      if (currentIndex === totalArrays) {
        result.push(currentCombination)
        return
      }

      const currentArray = arrays[currentIndex]
      const keyName = keyNames[currentIndex]
      for (let i = 0; i < currentArray.length; i++) {
        generateCombinations({ ...currentCombination, [keyName]: currentArray[i] }, currentIndex + 1)
      }
    }

    generateCombinations({}, 0)
    return result
  }

  const groupYardGroupData = containersData => {
    let groupedData = []
    if (selectedColumns.length === 0 || containersData.length === 0) {
      return []
    }
    let columns = []
    for (let column of selectedColumns) {
      columns.push(columnMap[column])
    }
    let rechartsData = []
    let combinationNames = []
    const allCombinations = getCombinations(columns, selectedColumns)
    for (let yardName of yardGroupNames) {
      rechartsData.push({ name: yardName })
    }
    for (let combination of allCombinations) {
      let nameStr = ''
      for (let field of Object.keys(combination)) {
        nameStr += `${field}: ${fieldMap[field][combination[field]]}, `
      }
      nameStr = nameStr.substring(0, nameStr.length - 2)
      combinationNames.push(nameStr)

      const dynamicFilter = (row, obj, yardGroupName) => {
        // Iterate over the selected fields and apply the filter conditions
        if (row['GROUP_NAME'] !== yardGroupName) {
          return false
        }
        for (const field of selectedColumns) {
          // Check if the field value in the current object matches the selected field value
          if (row[yardGroupsColumnsMap[field]] + '' !== obj[field]) {
            return false // If any field doesn't match, exclude the object from the result
          }
        }
        return true // If all selected fields match, include the object in the result
      }

      for (let yardGroupName of yardGroupNames) {
        let indexToModify = rechartsData.findIndex(obj => obj.name === yardGroupName)
        const countField = containersData.filter(row => dynamicFilter(row, combination, yardGroupName)).length
        rechartsData[indexToModify][nameStr] = countField
        //lineData.push(countFieldA25AndFieldBTr)
      }
      //let dataPoint = {name: nameStr, data: lineData}
      //groupedData.push(dataPoint)
    }
    setCombinationFieldNames(combinationNames)
    setYardGroupsSeries(rechartsData)
  }

  const getPortData = async (refresh = false) => {
    const dateAPIFormat = `${date?.toISOString().substring(0, 10).replaceAll('-', '')}`
    if (dateAPIFormat.length) {
      let url = ''
      if (refresh) {
        url = `${process.env.NEXT_PUBLIC_API_URL}/portSummary/refreshCurrentPortStatus`
      } else {
        url = `${process.env.NEXT_PUBLIC_API_URL}/portSummary/getDailyContainersStatus/${dateAPIFormat}`
        if (date && date.getTime() == new Date(new Date().toISOString().substring(0, 10)).getTime()) {
          url = `${process.env.NEXT_PUBLIC_API_URL}/portSummary/getCurrentPortStatus`
        }
      }

      axios
        .get(url)
        .then(res => {
          const result = res.data.data
          setAllContainersData(res.data.data.allRecords)
          groupYardGroupData(res.data.data.allRecords)
          setTotalContainerCount(result.total_cont_count)
          const summary = result.summary

          let statusSummary: any = {}
          let typeSummary: any = {}
          let regimeSummary: any = {}
          for (let keyStatus of Object.keys(summary)) {
            if (!(keyStatus in statusSummary)) statusSummary[keyStatus] = 0

            for (let keyType of Object.keys(summary[keyStatus])) {
              if (!(keyType in typeSummary)) typeSummary[keyType] = 0

              for (let keyRegime of Object.keys(summary[keyStatus][keyType])) {
                if (!(keyRegime in regimeSummary)) regimeSummary[keyRegime] = 0

                regimeSummary[keyRegime] += summary[keyStatus][keyType][keyRegime]
                typeSummary[keyType] += summary[keyStatus][keyType][keyRegime]
                statusSummary[keyStatus] += summary[keyStatus][keyType][keyRegime]
              }
            }
          }

          setContainerStatusData([checkKeyExist(statusSummary, '1'), checkKeyExist(statusSummary, '2')])
          setContainerTypeData([
            checkKeyExist(typeSummary, '31'),
            checkKeyExist(typeSummary, '32'),
            checkKeyExist(typeSummary, '37'),
            checkKeyExist(typeSummary, '35')
          ])
          setContainerRegimeData([
            checkKeyExist(regimeSummary, '1'),
            checkKeyExist(regimeSummary, '2'),
            checkKeyExist(regimeSummary, '4'),
            checkKeyExist(regimeSummary, '20')
          ])
        })
        .catch(err => console.log('err', err))
    }
  }

  useEffect(() => {
    getPortData()
    setInterval(() => {
      getPortData()
    }, 10 * 60 * 1000)
  }, [date])

  useEffect(() => {
    groupYardGroupData(allContainersData)
  }, [allContainersData, selectedColumns])

  const createApexColumnChartOptions = (xaxisCategories: string[], chartColors: string[]): ApexOptions => {
    return {
      chart: {
        stacked: true,
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '35%',
          endingShape: 'rounded',
          startingShape: 'rounded'
        }
      },
      colors: chartColors,
      grid: {
        strokeDashArray: 7,
        borderColor: theme.palette.divider,
        padding: {
          left: 0,
          bottom: -10
        }
      },
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 6,
        curve: 'smooth',
        lineCap: 'round',
        colors: [theme.palette.background.paper]
      },
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        categories: xaxisCategories,
        labels: {
          style: { colors: theme.palette.text.disabled }
        }
      },
      yaxis: {
        labels: {
          offsetY: 2,
          offsetX: -10,
          formatter: (value: number) => `${value}`,
          style: { colors: theme.palette.text.disabled }
        }
      },
      responsive: [
        {
          breakpoint: theme.breakpoints.values.xl,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: theme.breakpoints.values.lg,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        },
        {
          breakpoint: theme.breakpoints.values.sm,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 430,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '55%'
              }
            }
          }
        }
      ]
    }
  }

  const createApexPieChartOptions = (chartLabels: string[], chartColors: string[], plotLabel: string): ApexOptions => {
    return {
      chart: {
        sparkline: { enabled: true }
      },
      colors: chartColors,
      stroke: { width: 0 },
      legend: { show: false },
      dataLabels: { enabled: false },
      labels: chartLabels,
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      plotOptions: {
        pie: {
          customScale: 0.9,
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                offsetY: 25,
                fontSize: '0.875rem',
                color: theme.palette.text.secondary
              },
              value: {
                offsetY: -15,
                fontWeight: 500,
                formatter: value => `${value}`,
                color: theme.palette.text.primary
              },
              total: {
                show: true,
                fontSize: '0.875rem',
                label: plotLabel,
                color: theme.palette.text.secondary,
                formatter: value => `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}`
              }
            }
          }
        }
      }
    }
  }

  const handleSelectedColumnChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedColumns(event.target.value.sort() as string[])
  }

  return (
    <ApexChartWrapper>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='lg'>
        <Grid container>
          <Grid item xs={4} sm={4}>
            <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
              <Typography variant='h6' component='span'>
                Port Status
              </Typography>
            </DialogTitle>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xl: 'flex-end', xs: 'flex-start' } }}>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Button
                  variant='contained'
                  color='info'
                  startIcon={<Icon icon='material-symbols:refresh' />}
                  onClick={() => {
                    setDate(new Date(new Date().toISOString().substring(0, 10)))
                    getPortData(true)
                  }}
                >
                  Refresh Cache
                </Button>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <DatePicker
                  selected={date}
                  id='basic-input'
                  popperPlacement={popperPlacement}
                  onChange={(date: Date) => {
                    setDate(date)
                    getPortData()
                  }}
                  placeholderText='Click to select a date'
                  dateFormat='dd/MM/yyyy'
                  customInput={<CustomInput label='Select a Date' />}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <DialogContent dividers sx={{ p: 4 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{ mt: 2.75, mb: 4.75, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='h3'>
                        {totalContainerCount ? totalContainerCount.toLocaleString('en-US') : '0'}
                      </Typography>
                      <Typography variant='caption'>Total Container Count</Typography>
                    </Box>
                    <Box sx={{ height: 75, width: '100%', maxWidth: '120px' }}>
                      <ResponsiveContainer>
                        <BarChart height={100} data={chartData}>
                          <Bar dataKey='value' fill={theme.palette.primary.main} radius={4} barSize={5} />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Card sx={{ color: 'black' }}>
                <CardContent>
                  <Grid item xs={12}>
                    <ReactApexcharts
                      type='donut'
                      height={220}
                      series={containerStatusData}
                      options={createApexPieChartOptions(
                        ['Dolu', 'Boş'],
                        [theme.palette.warning.light, theme.palette.primary.light],
                        'Container Status'
                      )}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Card sx={{ color: 'black' }}>
                <CardContent>
                  <Grid item xs={12}>
                    <ReactApexcharts
                      type='donut'
                      height={220}
                      series={containerTypeData}
                      options={createApexPieChartOptions(
                        ['20', '40', '40 HC', '45 HC'],
                        [
                          theme.palette.info.dark,
                          theme.palette.error.dark,
                          theme.palette.warning.main,
                          theme.palette.success.main
                        ],
                        'Container Type'
                      )}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Card sx={{ color: 'black' }}>
                <CardContent>
                  <Grid item xs={12}>
                    <ReactApexcharts
                      type='donut'
                      height={220}
                      series={containerRegimeData}
                      options={createApexPieChartOptions(
                        ['İthalat', 'Transit', 'İhracat', 'Tekrar Sevk'],
                        [
                          theme.palette.primary.main,
                          theme.palette.secondary.main,
                          theme.palette.warning.main,
                          theme.palette.success.main
                        ],
                        'Regime'
                      )}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid item xs={6} sm={6}>
                            <Card sx={{color: "black"}}>
                                <Grid container>
                                    <StyledGrid item xs={12}>
                                        <CardContent sx={{ height: '100%', '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                                            <Typography variant='h6'>Yard A</Typography>
                                            <ReactApexcharts 
                                              type='bar' height={282} series={yardASeries} 
                                              options={createApexColumnChartOptions(["A1", "A2", "A3", "A4", "A5", "A6"], [theme.palette.primary.main])} 
                                            />
                                        </CardContent>
                                    </StyledGrid>
                                </Grid>
                            </Card>
                        </Grid> */}
            <Grid item xs={12} sm={12}>
              <Card sx={{ color: 'black' }}>
                <Grid container>
                  <StyledGrid item xs={12}>
                    <CardContent sx={{ height: '100%', '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                      <Grid container>
                        <Grid item xs={6} sm={6}>
                          <Typography variant='h6'>Yard Groups</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <div>
                            <FormControl fullWidth>
                              <InputLabel id='demo-multiple-checkbox-label'>Fields</InputLabel>
                              <Select
                                multiple
                                label='Tag'
                                value={selectedColumns}
                                // MenuProps={MenuProps}
                                renderValue={selected => (
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {(selected as unknown as string[]).map(value => (
                                      <Chip key={value} label={value} sx={{ m: 0.75 }} />
                                    ))}
                                  </Box>
                                )}
                                onChange={handleSelectedColumnChange}
                                id='demo-multiple-checkbox'
                                labelId='demo-multiple-checkbox-label'
                                //renderValue={selected => (selected as unknown as string[]).join(', ')}
                              >
                                {yardGroupsColumns.map(name => (
                                  <MenuItem key={name} value={name}>
                                    <Checkbox checked={selectedColumns.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </Grid>
                      </Grid>
                      <RechartsWrapper>
                        <Box sx={{ height: 400 }}>
                          <ResponsiveContainer>
                            <BarChart
                              height={350}
                              data={yardGroupsSeries}
                              barSize={15}
                              style={{ direction }}
                              margin={{ left: -20 }}
                            >
                              <CartesianGrid strokeDasharray='3 3' />
                              <XAxis dataKey='name' reversed={direction === 'rtl'} />
                              <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
                              <Tooltip content={CustomTooltip} />
                              {combinationFieldNames.length &&
                                combinationFieldNames.map((field, index) => {
                                  if (field !== 'name') {
                                    if (index === combinationFieldNames.length - 1) {
                                      return (
                                        <Bar
                                          dataKey={field}
                                          stackId='a'
                                          fill={combinationColors[index]}
                                          radius={[15, 15, 0, 0]}
                                        />
                                      )
                                    }
                                    return <Bar dataKey={field} stackId='a' fill={combinationColors[index]} />
                                  }
                                })}
                            </BarChart>
                          </ResponsiveContainer>
                        </Box>
                      </RechartsWrapper>

                      {/* <ReactApexcharts 
                                              type='bar' height={400} series={yardGroupsSeries} 
                                              options={createApexColumnChartOptions(yardGroupNames, combinationColors)} 
                                              //[theme.palette.primary.main, theme.palette.warning.main, theme.palette.error.main, theme.palette.success.main]
                                            /> */}
                    </CardContent>
                  </StyledGrid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6}></Grid>
            <Grid item xs={6} sm={6}></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </ApexChartWrapper>
  )
}

export default PortsDailyStatusDialog
