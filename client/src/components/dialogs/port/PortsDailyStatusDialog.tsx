import React, { useState, useEffect } from 'react'

// ** MUI Imports
import { CircularProgress, Dialog, DialogTitle, DialogContent, Typography,
        IconButton, Grid, TextField, Autocomplete, FormControl, Button,
        InputLabel, Box, DialogActions, Card, CardContent } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import { GridProps } from '@mui/material/Grid'

// ** Third Party Component Imports
import { BarChart, Bar, ResponsiveContainer } from 'recharts'
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

const yardASeries = [
    {
      name: 'Container Count',
      data: [290, 220, 250, 185, 290, 200]
    }
]

const yardBSeries = [
    {
      name: 'Container Count',
      data: [29000, 22000, 25000, 18500, 29000, 20000, 34500]
    }
]

const yardCFSSeries = [
    {
      name: '20',
      data: [2, 2, 25, 15, 29]
    },
    {
        name: '40',
        data: [29, 22, 25, 18, 29]
    },
    {
        name: '40 HC',
        data: [290, 220, 250, 185, 290]
    },
    {
        name: '45 HC',
        data: [100, 120, 150, 115, 190]
    },
]

const yardESeries = [
    {
      name: 'Container Count',
      data: [29000, 22000, 25000, 18500, 29000, 20000, 34500]
    }
]

const containerStatusMap = {
  "1": "Dolu",
  "2": "Boş"
}

const containerTypeMap = {
  "31": "20",
  "32": "40",
  "35": "45 HC",
  "37": "40 HC"
}

const containerRegimeMap = {
  "1": "İthalat",
  "2": "Transit",
  "4": "İhracat",
  "20": "Tekrar Sevk"
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

interface IProps {
    open: boolean
    handleClose: () => void
}

const PortsDailyStatusDialog = (props: IProps) => {
    const { open, handleClose } = props
    const theme = useTheme()
    const { direction } = theme
    const popperPlacement: ReactDatePickerProps['popperPlacement'] = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

    const [date, setDate] = useState<DateType>(new Date("2022-09-10"))
    const [totalContainerCount, setTotalContainerCount] = useState<number>(0)
    const [containerStatusData, setContainerStatusData] = useState<number[]>([0, 0])
    const [containerTypeData, setContainerTypeData] = useState<number[]>([0, 0, 0, 0])
    const [containerRegimeData, setContainerRegimeData] = useState<number[]>([0, 0, 0, 0])
    
    const [yardAData, setYardAData] = useState({})
    const [yardBData, setYardBData] = useState({})
    const [yardCFSData, setYardCFSData] = useState({})
    const [yardEData, setYardEData] = useState({})

    const checkKeyExist = (dict: any, key: string): any => {
      if(key in dict){
        return dict[key]
      }
      return 0
    }

    const getPortData = async () => {
      const dateAPIFormat = `${date?.toISOString().substring(0, 10).replaceAll("-", "")}`
      console.log("dateAPIFormat: ", dateAPIFormat)
      if(dateAPIFormat.length){
        let url = `${process.env.NEXT_PUBLIC_API_URL}/portSummary/getDailyContainersStatus/${dateAPIFormat}`

        axios.get(url).then(res=>{
          console.log("port data: ", res.data)
          const result = res.data
          setTotalContainerCount(result.total_cont_count)
          const summary = result.summary

          let statusSummary: any = {}
          let typeSummary: any = {}
          let regimeSummary: any = {}
          for (let keyStatus of Object.keys(summary)){
            if(!(keyStatus in statusSummary))
              statusSummary[keyStatus] = 0

            for(let keyType of Object.keys(summary[keyStatus])){
              if(!(keyType in typeSummary))
                typeSummary[keyType] = 0

              for(let keyRegime of Object.keys(summary[keyStatus][keyType])){
                if(!(keyRegime in regimeSummary))
                  regimeSummary[keyRegime] = 0

                regimeSummary[keyRegime] += summary[keyStatus][keyType][keyRegime]
                typeSummary[keyType] += summary[keyStatus][keyType][keyRegime]
                statusSummary[keyStatus] += summary[keyStatus][keyType][keyRegime]
              }
            }
          }
          setContainerStatusData([checkKeyExist(statusSummary, "1"), checkKeyExist(statusSummary, "2")])
          setContainerTypeData([checkKeyExist(typeSummary, "31"), checkKeyExist(typeSummary, "32"), 
                                checkKeyExist(typeSummary, "37"), checkKeyExist(typeSummary, "35")])
          setContainerRegimeData([checkKeyExist(regimeSummary, "1"), checkKeyExist(regimeSummary, "2"),
                                  checkKeyExist(regimeSummary, "4"), checkKeyExist(regimeSummary, "20")])
        }).catch(err=>console.log("err", err))
      }
    };

    useEffect(() => {
      getPortData()
      setInterval(() => {
        getPortData()
      }, 10 * 60 * 1000);
    }, [])

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

    return (
        <ApexChartWrapper>
            <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='lg'>
                <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
                  <DatePickerWrapper>
                    <Grid container spacing={6}>
                      <Grid item xs={6} xl={6}>
                        <Typography variant='h6' component='span'>
                            Port Status
                        </Typography>
                      </Grid>
                      <Grid item xs={6} xl={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xl: 'flex-end', xs: 'flex-start' } }}>
                          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                            <DatePicker
                              selected={date}
                              id='basic-input'
                              popperPlacement={popperPlacement}
                              onChange={(date: Date) => {setDate(date); getPortData()}}
                              placeholderText='Click to select a date'
                              dateFormat="dd/MM/yyyy"
                              customInput={<CustomInput label='Select a Date' />}
                            />
                          </Box>
                        </Box>  
                        <IconButton
                              aria-label='close'
                              onClick={handleClose}
                              sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
                            >
                              <Icon icon='mdi:close' />
                            </IconButton>
                      </Grid>
                    </Grid>                  
                  </DatePickerWrapper>  
                </DialogTitle>
                <DialogContent dividers sx={{ p: 4 }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <Card>
                                <CardContent>
                                    <Box sx={{ mt: 2.75, mb: 4.75, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h3'>{totalContainerCount.toLocaleString("en-US")}</Typography>
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
                            <Card sx={{color: "black"}}>
                                <CardContent>
                                    <Grid item xs={12}>
                                        <ReactApexcharts 
                                          type='donut' height={220} series={containerStatusData} 
                                          options={createApexPieChartOptions(
                                            ['Dolu', 'Boş'],[
                                              theme.palette.warning.light,
                                              theme.palette.primary.light
                                            ], 'Container Status')} 
                                        />
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Card sx={{color: "black"}}>
                                <CardContent>
                                    <Grid item xs={12}>
                                        <ReactApexcharts 
                                          type='donut' height={220} series={containerTypeData} 
                                          options={createApexPieChartOptions(
                                            ['20', '40', '40 HC', '45 HC'],[
                                              theme.palette.info.dark,
                                              theme.palette.error.dark,
                                              theme.palette.warning.main,
                                              theme.palette.success.main
                                            ], 'Container Type')} 
                                        />
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Card sx={{color: "black"}}>
                                <CardContent>
                                    <Grid item xs={12}>
                                        <ReactApexcharts 
                                          type='donut' height={220} series={containerRegimeData} 
                                          options={createApexPieChartOptions(
                                            ['İthalat', 'Transit', 'İhracat', 'Tekrar Sevk'],[
                                              theme.palette.primary.main,
                                              theme.palette.secondary.main,
                                              theme.palette.warning.main,
                                              theme.palette.success.main
                                            ], 'Regime')} 
                                        />
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6}>
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
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Card sx={{color: "black"}}>
                                <Grid container>
                                    <StyledGrid item xs={12}>
                                        <CardContent sx={{ height: '100%', '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                                            <Typography variant='h6'>Yard CFS</Typography>
                                            <ReactApexcharts 
                                              type='bar' height={282} series={yardCFSSeries} 
                                              options={createApexColumnChartOptions(["CFS01", "CFS02", "CFS03", "CFS04", "CFS05"], [theme.palette.primary.main, theme.palette.warning.main, theme.palette.error.main, theme.palette.success.main])} 
                                            />
                                        </CardContent>
                                    </StyledGrid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6}>

                        </Grid>
                        <Grid item xs={6} sm={6}>

                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </ApexChartWrapper>
    )
}

export default PortsDailyStatusDialog