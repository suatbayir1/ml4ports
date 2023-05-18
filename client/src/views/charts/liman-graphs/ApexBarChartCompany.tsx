import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from 'src/@core/components/icon';
import format from 'date-fns/format';
import { ApexOptions } from 'apexcharts';
import DatePicker from 'react-datepicker';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ReactApexcharts from 'src/@core/components/react-apexcharts';
import * as groupedData2016 from 'src/@fake-db/liman/grouped_2df_2016.json';
import * as groupedData2017 from 'src/@fake-db/liman/grouped_2df_2017.json';
import * as groupedData2018 from 'src/@fake-db/liman/grouped_2df_2018.json';
import * as groupedData2019 from 'src/@fake-db/liman/grouped_2df_2019.json';
import * as groupedData2020 from 'src/@fake-db/liman/grouped_2df_2020.json';
import * as groupedData2021 from 'src/@fake-db/liman/grouped_2df_2021.json';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const useDebouncedEffect = (effect, delay, deps) => {
  const callback = useRef();

  useEffect(() => {
    callback.current = effect;
  }, [effect]);

  useEffect(() => {
    const handler = () => {
      callback.current();
    };

    const debounce = setTimeout(handler, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [delay, ...deps]);
};

const ApexBarChartCompany = () => {
  const [selectedCompany, setSelectedCompany] = useState(13);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedAnnotationOption, setSelectedAnnotationOption] = useState('LINE_KEY');
  const [annotations, setAnnotations] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [series20, setS20] = useState(filteredData.map(item => item['20']));
  const [series40, setS40] = useState(filteredData.map(item => item['40']));
  const [series40HC, setS40HC] = useState(filteredData.map(item => item['40 HC']));

  const allGroupedData = [
    groupedData2016,
    groupedData2017,
    groupedData2018,
    groupedData2019,
    groupedData2020,
    groupedData2021,
  ].map(data => Array.isArray(data) ? data : data.default);

  useDebouncedEffect(() => {
    const yearsToSearch = getYearsInRange(startDate, endDate);
    const dataToSearch = allGroupedData.filter((data, index) => yearsToSearch.includes(2016 + index));
    const flattenedData = [].concat.apply([], dataToSearch);
    getUniqueCompanyCategories(flattenedData);
    const newFilteredData = filterDataByDateRange(
      flattenedData.filter(item => item.COMPANY == selectedCompany),
      startDate,
      endDate
    );
    setFilteredData(newFilteredData)
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

    setAnnotations(
        newFilteredData.map((item, index) => ({
          x: `${item.YEAR}-${item.MONTH}-${item.DAY}`,
          y: item['20'] + item['40'] + item['40 HC'],
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
              transform: 'rotate(45deg)'
            },
            offsetY: -20,
            text: ` ${item[selectedAnnotationOption]}`,
          },
          pointIndex: index,
        }))
    );
  }, 500, [selectedCompany, startDate, endDate, selectedAnnotationOption]);

  const getUniqueCompanyCategories = (flattenedData) => {
    const companyCategories = new Set(flattenedData.map(item => item.COMPANY));
    const uniqueCompanyCategories = Array.from(companyCategories);  

    localStorage.setItem('uniqueCompanyCategories', JSON.stringify(uniqueCompanyCategories));

    return uniqueCompanyCategories;
  };

  const filterDataByDateRange = (data, start, end) => {
    return data.filter(item => {
      const itemDate = new Date(item.YEAR, item.MONTH - 1, item.DAY);
      return itemDate >= start && itemDate <= end;
    });
  };

  const getYearsInRange = (start, end) => {
    let startYear = start.getFullYear();
    let endYear = startYear;

    if(end != undefined)
       endYear = end.getFullYear();

    const years = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }

    return years;
  };

  const handleOnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const CustomInput = forwardRef((props, ref) => {
    const startDateStr = props.start !== null ? format(props.start, 'MM/dd/yyyy') : '';
    const endDateStr = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null;

    const value = `${startDateStr}${endDateStr !== null ? endDateStr : ''}`;

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
          ),
        }}
      />
    );
  });

  const options:ApexOptions = {
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
      points: selectedAnnotationOption != 'NONE' ? annotations : [],
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
          title="Container Volume By Company Group"
          subheader={
            <>
              <FormControl style={{ marginRight: '16px' }}>
                  <InputLabel >Annotation</InputLabel>
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
                    <MenuItem value="NONE">None</MenuItem>
                  </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Category ID</InputLabel>
                <Select
                  value={selectedCompany}
                  onChange={(event) => setSelectedCompany(event.target.value)}
                  inputProps={{
                    name: 'company-cat',
                    id: 'company-cat',
                  }}
                >
                  {JSON.parse(localStorage.getItem('uniqueCompanyCategories') || '[]').map((companyCat) => (
                    <MenuItem key={companyCat} value={companyCat}>
                      {companyCat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
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
  
 export default ApexBarChartCompany;
  
