// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// const series = [
//   {
//     data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
//   }
// ]

interface Props {
  series: any[]
  title: string
}

const ApexLineForecastChart = ({ series, title }: Props) => {
  // ** State
  const [active, setActive] = useState<string | null>('daily')

  // ** Hook
  const theme = useTheme()
  const handleActive = (event: MouseEvent<HTMLElement>, newActive: string | null) => {
    setActive(newActive)
  }

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    annotations: {
      xaxis: [
        {
          x: '13/12',
          x2: '16/12',
          strokeDashArray: 0,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396'
            },
            text: 'Today'
          }
        }
      ],
      points: [
        {
          x: new Date('01 Dec 2017').getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: '#fff',
            strokeColor: 'red',
            radius: 2,
            cssClass: 'apexcharts-custom-class'
          },
          label: {
            borderColor: '#FF4560',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#FF4560'
            },

            text: 'Point Annotation'
          }
        },
        {
          x: new Date('08 Dec 2017').getTime(),
          y: 9340.85,
          marker: {
            size: 0
          },
          image: {
            path: '../../assets/images/ico-instagram.png'
          }
        }
      ]
    },
    forecastDataPoints: {
      count: 3,
      fillOpacity: 5,
      strokeWidth: 4,
      dashArray: 5
    },
    colors: ['#ff9f43', '#00E396'],
    stroke: { curve: 'straight' },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ['#ff9f43'],
      strokeColors: ['#fff']
    },
    grid: {
      padding: { top: -10 },
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      custom(data: any) {
        return `<div class='bar-chart'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
        </div>`
      }
    },
    yaxis: {
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: theme.palette.divider },
      crosshairs: {
        stroke: { color: theme.palette.divider }
      },
      labels: {
        style: { colors: theme.palette.text.disabled }
      },
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
        '21/12'
      ]
    }
  }

  return (
    <Card>
      <CardHeader
        title={title}
        subheader='Commercial networks & enterprises'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <ToggleButtonGroup exclusive value={active} onChange={handleActive}>
            <ToggleButton value='daily'>Daily</ToggleButton>
            <ToggleButton value='monthly'>Monthly</ToggleButton>
            <ToggleButton value='yearly'>Yearly</ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <CardContent>
        <ReactApexcharts type='line' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexLineForecastChart
