// ** MUI Imports
import React, { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import DatePicker from 'react-datepicker'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import LineChartProps from './props/LineChartProps';
import ContainerChartProps from './props/ContainerChartProps';
import { format } from 'date-fns';
import InputAdornment from '@mui/material/InputAdornment';

interface PickerProps {
  start: Date | number
  end: Date | number
}

const ApexLineChartContainers = ({containers, regime_names , startDate, endDate}:ContainerChartProps) => {
  // ** Hook
  const theme = useTheme();
  const { t, i18n } = useTranslation()
  const [selectedOption, setSelectedOption] = useState<number>(-1)
  const [series, setSeries] = useState<any>([])

  const selectorOptions = [{REGEME_KEY: -1, DESCRIPTION: "All"}, ...regime_names];

  const handleOptionChange = (value : string | null) => {
    console.log(value);
    setSelectedOption(selectorOptions.find(item=>item.DESCRIPTION == value) ?.REGEME_KEY|| -1);
    console.log(selectedOption);
    
  };
  

  function createSeries() {
    const groupedData = containers.filter(item=>item.REGEME_KEY == selectedOption || selectedOption == -1).reduce((acc, cur) => {
      const groupDesc = cur.DESCRIPTION;
      const date = cur.date;
      const count = cur.count;
      if (!acc[groupDesc]) {
        acc[groupDesc] = {};
      }
      if (!acc[groupDesc][date]) {
        acc[groupDesc][date] = 0;
      }
      acc[groupDesc][date] += count;
      return acc;
    }, {});
    
    const dates = getCategories();

    const result = Object.entries(groupedData)
    .map(([groupDesc, datesObj]) => {
      const data = dates.map(date => datesObj[date] || 0);
      return { name: groupDesc, data };
    });

    console.log(groupedData);
    

    setSeries(result);
  }


  function getCategories() {
    let uniqueDates = [...new Set(containers.map(containers => containers.date))];

    if (startDate || endDate) {
      uniqueDates = uniqueDates.filter(date => {
        if (startDate && new Date(date) < startDate) return false;
        if (endDate && new Date(date) > endDate) return false;
        return true;
      });
    }
    return uniqueDates.sort();
  }

  
  useEffect(() => createSeries(), [containers, selectedOption, startDate, endDate])

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      labels: { colors: theme.palette.text.secondary },
      markers: {
        offsetY: 1,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
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
          <span>${data.series[data.seriesIndex][data.dataPointIndex]}</span>
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
      categories: getCategories(),
    }
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDateStr = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
    const endDateStr = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDateStr}${endDateStr !== null ? endDateStr : ''}`

    return (
      <TextField
        {...props}
        size='small'
        value={value}
        inputRef={ref}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon icon='mdi:bell-outline' />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <Icon icon='mdi:chevron-down' />
            </InputAdornment>
          )
        }}
      />
    )
  })

  return (
    <Card>
      <CardHeader
        // title={t("ContainersGraphTitle")}
        // // subheader={
        // // <DatePicker
        // //   selectsRange
        // //   endDate={endDate}
        // //   id='apexchart-area'
        // //   startDate={startDate}
        // //   selected={startDate}
        // //   onChange={handleOnChange}
        // //   placeholderText={t("DatePicker")}
        // //   customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
        // // />}
        // subheaderTypographyProps={{ sx: { marginTop:'15px', color: theme => `${theme.palette.text.disabled} !important` } }}
        // sx={{
        //   flexDirection: ['column', 'row'],
        //   alignItems: ['flex-start', 'center'],
        //   '& .MuiCardHeader-action': { mb: 0 },
        //   '& .MuiCardHeader-content': { mb: [2, 0] }
        // }}
        action={
          <Autocomplete
                  sx={{ width: 400 }}
                  options={selectorOptions.map(item=>item.DESCRIPTION)}
                  defaultValue={t("All")}
                  id='autocomplete-outlined'
                  renderInput={params => <TextField {...params} label={t("Container Type")} />}
                  onChange={(event: any, newValue: string | null) => {
                    handleOptionChange(newValue);
                  }}
                />
        }
      />
      <CardContent>
        <ReactApexcharts type='line' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexLineChartContainers
