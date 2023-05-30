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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import axios from 'axios';
import { log } from 'console'


const ApexBarChartShips = () => {

  const [selectedShip, setSelectedShip] = useState('ADELHEID-S.');
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedAnnotationOption, setSelectedAnnotationOption] = useState('LINE_KEY');
  const [annotations, setAnnotations] = useState([]);
  const [uniqueShipNames, setUniqueShipNames] = useState([]);

  const [series20, setS20] = useState([]);
  const [series40, setS40] = useState([]);
  const [series40HC, setS40HC] = useState([]);

  
  useEffect(() => {
    const fetchAndUpdateData = async () => {
      const newFilteredData = await fetchData(selectedShip);
      setFilteredData(newFilteredData);
      setCategories(
        newFilteredData
          .sort((a, b) => {
            const aDate = new Date(a.YEAR, a.MONTH - 1, a.DAY);
            const bDate = new Date(b.YEAR, b.MONTH - 1, b.DAY);
            return aDate.getTime() - bDate.getTime();
          })
          .map((item) => `${item.YEAR}-${item.MONTH}-${item.DAY}`)
      );
      setS20(newFilteredData.map((item) => item['20']));
      setS40(newFilteredData.map((item) => item['40']));
      setS40HC(newFilteredData.map((item) => item['40 HC']));
    };
  
    fetchAndUpdateData();
  }, [selectedShip]);
  
  
  useEffect(() => {
    setAnnotations(generateAnnotations());
  }, [filteredData, categories, series20, series40, series40HC, selectedAnnotationOption]);
  
  useEffect(() => {
    const fetchAndUpdateUniqueShipNames = async () => {
      const shipNames = await fetchUniqueShipNames();
      setUniqueShipNames(shipNames);
    };
  
    fetchAndUpdateUniqueShipNames();
  }, []);

  const fetchData = async (shipName) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/ships?SHIP_NAME=${shipName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };  

  const fetchUniqueShipNames = async () => {
    try {
      const response = await axios.get('http://localhost:PORT/api/ships/unique-names');
      return response.data;
    } catch (error) {
      console.error('Error fetching unique ship names:', error);
      return [];
    }
  };


  const generateAnnotations = () => {
    const annotations_ = [];
  
    if (series20.length && series40.length && series40HC.length) {
      for (let i = 0; i < filteredData.length; i++) {
        const labelText = filteredData[i] ? ` ${filteredData[i][selectedAnnotationOption]}` : 'N/A';
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
      title="Container Volume by Ships"
      sx={{
        flexDirection: ['column', 'row'],
        alignItems: ['flex-start', 'center'],
        '& .MuiCardHeader-action': { mb: 0 },
        '& .MuiCardHeader-content': { mb: [2, 0] },
      }}
      action={
        <>
         <FormControl style={{ marginRight: '16px' }}>
          <InputLabel htmlFor="annotation-option">Annotation</InputLabel>
          <Select
            value={selectedAnnotationOption}
            onChange={(event) => setSelectedAnnotationOption(event.target.value)}
            inputProps={{
              name: 'annotation-option',
              id: 'annotation-option',
            }}
          >
            <MenuItem value="LINE_KEY">Line Key</MenuItem>
            <MenuItem value="LINE_NAME">Line Name</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="ship-name">Ship</InputLabel>
          <Select
            value={selectedShip}
            onChange={(event) => setSelectedShip(event.target.value)}
            inputProps={{
              name: 'ship-name',
              id: 'ship-name',
            }}
          >
            {uniqueShipNames.map((shipName) => (
              <MenuItem key={shipName} value={shipName}>
                {shipName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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

export default ApexBarChartShips
