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
import Checkbox from '@mui/material/Checkbox';


// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { FormControlLabel } from '@mui/material'

interface PickerProps {
  start: Date | number
  end: Date | number
}

const ApexBarChartLineKey = () => {

  const [uniqueLineKeys, setUniqueLineKeys] = useState([]);
  const [selectedLineKey, setSelectedLineKey] = useState(517);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [showAnnotations, setShowAnnotations] = useState(true);


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [series20, setS20] = useState([]);
  const [series40, setS40] = useState([]);
  const [series40HC, setS40HC] = useState([]);

  useEffect(() => {
    const fetchUniqueLineKeys = async () => {
      const data = await getUniqueLineKeys();
      setUniqueLineKeys(data);
    };

    fetchUniqueLineKeys();
  }, []);


  useEffect(() => {
    const formattedStartDate = startDate?.toISOString().substring(0, 10);
    const formattedEndDate = endDate?.toISOString().substring(0, 10);    
  
    if (formattedStartDate && formattedEndDate) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/grouped-line?selectedLineKey=${selectedLineKey}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`);
          if (response.ok) {
            const data = await response.json();
            if(data){

              setCategories([...new Set(data.map(item => new Date(item.MOORAGE_DATE).toISOString().substring(0, 10)))]);
              
              setS20(data.map(item => item["20"]));
              setS40(data.map(item => item["40"]));
              setS40HC(data.map(item => item["40 HC"]));

              setFilteredData(data);

            }
            else {
              console.error('No data was fetched:', response.status);
            }

          } else {
            console.error('Failed to fetch data:', response.status);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }
  }, [selectedLineKey, startDate, endDate]);
  
  
  useEffect(() => {
    setAnnotations(generateAnnotations());
  }, [filteredData]);
  
  const getUniqueLineKeys = async () => {
    const response = await fetch('http://localhost:5000/unique-line-keys');
    const data = await response.json();
    return data;
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

        const labelText = filteredData[i] ? `${filteredData[i].SHIP_NAME}` : 'N/A';
        annotations_.push({
          x: categories[i],
          y: (series20[i] || 0) + (series40[i] || 0) + (series40HC[i] || 0),
          borderColor: '#fff',
          label: {
            text: labelText,
            position: 'top',
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
              offsetY: -20,
            },
            className: 'rotated-annotation',
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
      points: showAnnotations ? annotations : [],
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
        title="Container Volume By Line Key"
        subheader={
          <FormControl>
            <InputLabel htmlFor="line-key">Line Key</InputLabel>
            <Select
              value={selectedLineKey}
              onChange={(event) => setSelectedLineKey(event.target.value)}
              inputProps={{
                name: 'line-key',
                id: 'line-key',
              }}
            >
              {uniqueLineKeys.map((lineKey) => (
                <MenuItem key={lineKey} value={lineKey}>
                  {lineKey}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
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
        <FormControlLabel
          control={
            <Checkbox
              checked={showAnnotations}
              onChange={(event) => setShowAnnotations(event.target.checked)}
            />
          }
          label="Show Annotations"
        />
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

export default ApexBarChartLineKey
