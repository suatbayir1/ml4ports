// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'
import { ApexOptions } from 'apexcharts'
import DatePicker from 'react-datepicker'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import axiosInstance from 'src/@core/utils/axiosInstance';

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { log } from 'console'
import axios from 'axios'

interface PickerProps {
  start: Date | number
  end: Date | number
}



const ApexBarChartLineKeyDB = () => {

  const [selectedLineKey, setSelectedLineKey] = useState(517);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [annotations, setAnnotations] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [series20, setS20] = useState(filteredData.map(item => item['20']));
  const [series40, setS40] = useState(filteredData.map(item => item['40']));
  const [series40HC, setS40HC] = useState(filteredData.map(item => item['40 HC']));

  const [groupedData1, setGroupedData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('HEY');
        const response = await axios.get('/api/data');
        
        setGroupedData1(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

  fetchData();
}, []);

  useEffect(() => {
    const newFilteredData = filterDataByDateRange(groupedData1.filter(item => item.LineKey === selectedLineKey), startDate, endDate);
    setFilteredData(newFilteredData);

    setCategories(
      newFilteredData.sort((a, b) => {
          const aDate = new Date(a.YEAR, a.MONTH - 1, a.DAY);
          const bDate = new Date(b.YEAR, b.MONTH - 1, b.DAY);
          return aDate.getTime() - bDate.getTime();
        })
        .map(item => `${item.YEAR}-${item.MONTH}-${item.DAY}`)
    );
    setS20(newFilteredData.map(item => item['20']));
    setS40(newFilteredData.map(item => item['40']));
    setS40HC(newFilteredData.map(item => item['40 HC']));
  }, [selectedLineKey, startDate, endDate]);
  
  useEffect(() => {
    setAnnotations(generateAnnotations());
  }, [filteredData, categories, series20, series40, series40HC]);
  
  const getUniqueLineKey = () => {
    const lineKeys = groupedData1.map(item => item.LineKey);
    return [...new Set(lineKeys)];
  };

  const filterDataByDateRange = (data, start, end) => {
    return data.filter(item => {
      const itemDate = new Date(item.YEAR, item.MONTH - 1, item.DAY);
      return itemDate >= start && itemDate <= end;
    });
  };
  
  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const generateAnnotations = () => {
    const annotations_ = [];
  
    if (series20.length && series40.length && series40HC.length) {
      for (let i = 0; i < filteredData.length; i++) {
        const labelText = filteredData[i] ? `ShipName: ${filteredData[i].ShipName}` : 'N/A';
        annotations_.push({
          x: categories[i],
          y: series20[i] + series40[i] + series40HC[i],
          borderColor: '#fff',
          label: {
            text: labelText,
            position: 'top',
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
              orientation: '45deg',
              offsetY: -20,
            },
          },
        });
      }
    }
  
    return annotations_;
  };
  
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
  
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: 'Number of Containers',
      },
    },
    annotations: {
      points: annotations,
    },
  };
  
  const series = [
    {
      name: '20',
      data: series20,
    },
    {
      name: '40',
      data: series40,
    },
    {
      name: '40 HC',
      data: series40HC,
    },
  ];

  return (
    <Card>
      <CardHeader
        title="Daily Container Volume By Line Key"
        subheader={
          <Select
              value={selectedLineKey}
              onChange={(event) => setSelectedLineKey(event.target.value)}
              inputProps={{
                name: 'line-key',
                id: 'line-key',
              }}
            >
              {getUniqueLineKey().map((lineKeys) => (
                <MenuItem key={lineKeys} value={lineKeys}>
                  {lineKeys}
                </MenuItem>
              ))}
            </Select>
        }
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] },
        }}
        action={
          <>
          <DatePicker
            selectsRange
            endDate={endDate}
            id='apexchart-area'
            startDate={startDate}
            selected={startDate}
            onChange={handleOnChange}
            placeholderText={"Date Picker"}
            customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
          />
          </>
        }
      />
      <CardContent>
        <ReactApexcharts
          type="bar"
          height={400}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  );

}

export default ApexBarChartLineKeyDB
