// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import format from 'date-fns/format'
import { ApexOptions } from 'apexcharts'
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import BarChartProps from './props/GoodsChartProps'


const ApexBarChart = ({goods, groups, startDate, endDate }:BarChartProps) => {
  // ** States
  const [series, setSeries] = useState();
  const active = "monthly";
  // ** Hook
  const theme = useTheme()

  // ** Functions
  function createSeries(){

    console.log(startDate, endDate);
    

    const categories = getCategories();
  
    const groups = [...new Set(goods.map(item => item.GROUP_NAME))];
  
    if( categories != -1){
      const series = groups.map(groupName => {
        const groupData = categories.map(category => {
          const sum = goods.reduce((acc, item) => {
            if (item.GROUP_NAME === groupName && item.date.startsWith(category)) {
              return acc + item.count;
            } else {
              return acc;
            }
          }, 0);
    
          return sum;
        });
    
        return {
          name: groupName,
          data: groupData
        };
      });
    
      setSeries(series);
    }
  }

  function getCategories(): string[] | -1 {
    let categories: string[] = [];
  
    if (active === 'yearly') {
      categories = [...new Set(goods.map(item => item.date.slice(0, 4)))];
    } else if (active === 'monthly') {
      categories = [...new Set(goods.map(item => item.date.slice(0, 7)))];
    } 
  
    if (startDate || endDate) {
      categories = categories.filter(category => {
        if (startDate && category < startDate) return false;
        if (endDate && category > endDate) return false;
        return true;
      });
    }
  
    if (categories.length > 100) {
      return -1;
    } else {
      return categories;
    }
  }

  useEffect(() => createSeries(), [goods, startDate, endDate])

  if (groups == null) {
    return <div>Loading...</div>;
  }

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
        style: { colors: theme.palette.text.secondary }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      categories: getCategories(),
      labels: {
        style: { colors: theme.palette.text.secondary }
      }
    }
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
        // action={
        //   <DatePicker
        //     selectsRange
        //     endDate={endDate}
        //     id='apexchart-bar'
        //     selected={startDate}
        //     startDate={startDate}
        //     onChange={handleOnChange}
        //     placeholderText='Click to select a date'
        //     customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
        //   />
        // }
      />
      <CardContent>
        <ReactApexcharts
          type='bar'
          height={400}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  )
}

export default ApexBarChart
