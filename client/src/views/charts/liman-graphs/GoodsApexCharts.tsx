import { forwardRef, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import format from 'date-fns/format'
import { ApexOptions } from 'apexcharts'
import DatePicker from 'react-datepicker'
import Icon from 'src/@core/components/icon'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import Grid from '@mui/material/Grid'
import GoodsChartProps from './props/GoodsChartProps'

interface PickerProps {
  start: Date | number
  end: Date | number
}

const GoodsApexCharts = ({goods, groups} : GoodsChartProps) => {
  // ** States
  const [endDate, setEndDate] = useState<DateType>(null)
  const [startDate, setStartDate] = useState<DateType>(null)
  const [series, setSeries] = useState([]);
  const active = "weekly";
  // ** Hook
  const theme = useTheme()

  // ** Functions

  function createSeries(){

    console.log(startDate, endDate);
    

    const categories = getCategories();
  
    const groups = [...new Set(goods.map(item => item.GOODS_GROUP_KEY))];
  
    if( categories.length > 0){
      const series = groups.map(groupKey => {
        const groupData = categories.map(category => {
          const sum = goods.reduce((acc, item) => {
            if (item.GOODS_GROUP_KEY === groupKey && item.date.startsWith(category)) {
              return acc + item.count;
            } else {
              return acc;
            }
          }, 0);
    
          return sum;
        });
    
        return {
          name: goods.find(index => index.GOODS_GROUP_KEY === groupKey)?.GROUP_NAME,
          data: groupData
        };
      });
    
      setSeries(series);
      console.log(series);
      console.log(categories);
      
      return;
    }

    setSeries([]);
  }

  function getCategories(): string[] | -1 {
    let categories: string[] = [];
  
    if (active === 'yearly') {
      categories = [...new Set(goods.map(item => item.date.slice(0, 4)))];
    } else if (active === 'monthly') {
      categories = [...new Set(goods.map(item => item.date.slice(0, 7)))];
    } else if (active === 'weekly') {
      const dateSet = new Set(goods.map(item => item.date));
      const dateArray = [...dateSet].sort();
      const startDateValue = startDate ? new Date(startDate) : new Date(dateArray[0]);
      const endDateValue = endDate ? new Date(endDate) : new Date(dateArray[dateArray.length - 1]);
      let currentDate = new Date(startDateValue);
  
      while (currentDate <= endDateValue) {
        categories.push(currentDate.toISOString().slice(0, 7));
        currentDate.setDate(currentDate.getDate() + 7);
      }
    }
  
    if (startDate || endDate) {
      categories = categories.filter(category => {
        if (startDate && new Date(category) < startDate) return false;
        if (endDate && new Date(category) > endDate) return false;
        return true;
      });
    }
  
    if (categories.length > 16) {
      return [];
    } else {
      return categories;
    }
  }

  useEffect(() => createSeries(), [goods, startDate, endDate])

  if (groups == null) {
    return <div>Loading...</div>;
  }

  

  // ** Chart

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        borderRadius: 8,
        barHeight: '30%',
        horizontal: true,
        startingShape: 'rounded'
      }
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
      labels: {
        colors: theme.palette.text.secondary
      }
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: false }
      },
      padding: {
        top: -10
      }
    },
    yaxis: {
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      categories: getCategories(),
    }
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

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

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Card>
      <CardHeader
        title='Data Science'
        subheader='$74,382.72'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <DatePicker
            selectsRange
            endDate={endDate}
            id='apexchart-bar'
            selected={startDate}
            startDate={startDate}
            onChange={handleOnChange}
            placeholderText='Click to select a date'
            customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
          />
        }
      />
      <CardContent>
      {series.length > 0 ? (
          <ReactApexcharts
          type='bar'
          height={400}
          options={options}
          series={series}
          />
      ) : <div><h3>Too many buckets, reduce the range</h3></div>}

       </CardContent>
    </Card>
  )
}

export default GoodsApexCharts
