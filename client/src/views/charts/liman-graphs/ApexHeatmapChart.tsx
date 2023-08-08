import { useTranslation } from 'react-i18next'
import { forwardRef, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import OptionsMenu from 'src/@core/components/option-menu'
import HeatmapProps from './props/HeatmapProps'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const ApexHeatmapChart = ({ lines, title }: HeatmapProps) => {
  // ** Hook
  const theme = useTheme()
  const { t, i18n } = useTranslation()

  const [series, setSeries] = useState<any>([])
  const [selectedOption, setSelectedOption] = useState('2022')

  const selectorOptions = [
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
    { label: '2019', value: '2019' }
  ]

  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(event.target.value as string)
  }

  function getUniqueDischargeLines() {
    const uniqueDischargeLines = []
    for (const line of lines) {
      if (line.DISCHARGE_LINE && !uniqueDischargeLines.includes(line.DISCHARGE_LINE)) {
        uniqueDischargeLines.push(line.DISCHARGE_LINE)
      }
    }
    return uniqueDischargeLines
  }

  function createSeries() {
    const uniqueDischargeLines = getUniqueDischargeLines()
    const series = []

    // Get unique dates
    const uniqueDates = [...new Set(lines.map(line => line.date))]
      .filter(date => date.startsWith(selectedOption))
      .sort()

    // Loop through unique dates
    for (const date of uniqueDates) {
      const data = []

      // Loop through unique dischargeLines
      for (const dischargeLine of uniqueDischargeLines) {
        // Find line with matching date and dischargeLine
        const line = lines.find(line => line.date === date && line.DISCHARGE_LINE === dischargeLine)

        // If line is found, add its count to the data array, otherwise add 0
        data.push(line ? line.count : 0)
      }

      series.push({ name: date, data })
    }

    setSeries(series)
  }

  useEffect(() => createSeries(), [lines, selectedOption])

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      colors: [theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.customColors.bodyBg]
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: theme.palette.text.secondary
      },
      markers: {
        offsetY: 0,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            { to: 100, from: 0, name: '0-100', color: '#1984c5' },
            { to: 500, from: 101, name: '100-500', color: '#22a7f0' },
            { to: 1000, from: 501, name: '500-1000', color: '#48b5c4' },
            { to: 2000, from: 1001, name: '1000-2000', color: '#76c68f' },
            { to: 6000, from: 2001, name: '2000-6000', color: '#a6d75b' },
            { to: 10000, from: 6001, name: '6000-10000', color: '#c9e52f' }
          ]
        }
      }
    },
    grid: {
      padding: { top: -20 }
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.disabled
        }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: getUniqueDischargeLines()
    }
  }

  return (
    <Card>
      <CardHeader
        title={t('Discharge Lines')}
        action={
          <Select value={selectedOption} onChange={handleOptionChange}>
            {selectorOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        }
      />
      <CardContent>
        <ReactApexcharts type='heatmap' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexHeatmapChart
