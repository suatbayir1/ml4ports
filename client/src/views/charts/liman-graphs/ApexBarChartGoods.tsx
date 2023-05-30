import React, { forwardRef, useEffect, useState, useRef } from 'react'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Icon from 'src/@core/components/icon'
import format from 'date-fns/format'
import { ApexOptions } from 'apexcharts'
import DatePicker from 'react-datepicker'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import * as groupedData2016 from 'src/@fake-db/liman/grouped_2df_2016.json'
import * as groupedData2017 from 'src/@fake-db/liman/grouped_2df_2017.json'
import * as groupedData2018 from 'src/@fake-db/liman/grouped_2df_2018.json'
import * as groupedData2019 from 'src/@fake-db/liman/grouped_2df_2019.json'
import * as groupedData2020 from 'src/@fake-db/liman/grouped_2df_2020.json'
import * as groupedData2021 from 'src/@fake-db/liman/grouped_2df_2021.json'
import { FormControl, InputLabel } from '@mui/material'

// ** Helpers
import { getUrl } from 'src/helpers/api/getter'

const ApexBarChartGoods = () => {
  const [selectedGoodName, setSelectedGoodName] = useState('')
  const [uniqueGoodsName, setUniqueGoodsName] = useState()

  const [filteredData, setFilteredData] = useState([])
  const [categories, setCategories] = useState([])

  const [selectedAnnotationOption, setSelectedAnnotationOption] = useState('LINE_KEY')
  const [annotations, setAnnotations] = useState([])

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [series20, setS20] = useState([])
  const [series40, setS40] = useState([])
  const [series40HC, setS40HC] = useState([])

  useEffect(() => {
    const fetchUniqueGoodsName = async () => {
      const data = await getUniqueGoodsName()
      setUniqueGoodsName(data)

      localStorage.setItem('uniqueGoodsName', JSON.stringify(data))
    }

    fetchUniqueGoodsName()
  }, [])

  useEffect(() => {
    const formattedStartDate = startDate?.toISOString().substring(0, 10)
    const formattedEndDate = endDate?.toISOString().substring(0, 10)

    if (formattedStartDate && formattedEndDate) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            getUrl(
              `container/grouped-goods?selectedGoods=${selectedGoodName}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`
            )
          )
          if (response.ok) {
            const data = await response.json()

            if (data) {
              setCategories(data.map(item => new Date(item.MOORAGE_DATE).toISOString().substring(0, 10)))

              setS20(data.map(item => item['20']))
              setS40(data.map(item => item['40']))
              setS40HC(data.map(item => item['40 HC']))

              setFilteredData(data)
            } else {
              console.error('No data was fetched:', response.status)
            }
          } else {
            console.error('Failed to fetch data:', response.status)
          }
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }

      fetchData()
    }
  }, [selectedGoodName, startDate, endDate])

  useEffect(() => {
    setAnnotations(generateAnnotations())
  }, [filteredData, selectedAnnotationOption])

  const generateAnnotations = () => {
    const annotations_ = []

    if (selectedAnnotationOption != 'NONE') {
      if (series20.length && series40.length && series40HC.length) {
        for (let i = 0; i < filteredData.length; i++) {
          const labelText = filteredData[i] ? ` ${filteredData[i][selectedAnnotationOption]}` : 'N/A'
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
                orientation: '45deg',
                offsetY: -20
              }
            }
          })
        }
      }
    }

    return annotations_
  }

  const getUniqueGoodsName = async () => {
    const response = await fetch(getUrl('container/unique-goods-name'))
    const data = await response.json()
    return data
  }

  const handleOnChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const CustomInput = forwardRef((props, ref) => {
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
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      title: {
        text: 'Number of Containers'
      }
    },
    annotations: {
      points: selectedAnnotationOption != 'NONE' ? annotations : []
    }
  }

  const series = [
    {
      name: '20',
      data: series20
    },
    {
      name: '40',
      data: series40
    },
    {
      name: '40 HC',
      data: series40HC
    }
  ]

  return (
    <Card>
      <CardHeader
        title='Container Volume By Good Group'
        subheader={
          <>
            <FormControl style={{ marginRight: '16px' }}>
              <InputLabel>Annotation</InputLabel>
              <Select
                value={selectedAnnotationOption}
                onChange={event => setSelectedAnnotationOption(event.target.value)}
                inputProps={{
                  name: 'annotation-option',
                  id: 'annotation-option'
                }}
              >
                <MenuItem value='LINE_KEY'>Line Key</MenuItem>
                <MenuItem value='LINE_NAME'>Line Name</MenuItem>
                <MenuItem value='NONE'>None</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='good-key'>Good Group</InputLabel>
              <Select
                value={selectedGoodName}
                onChange={event => setSelectedGoodName(event.target.value)}
                inputProps={{
                  name: 'good-key',
                  id: 'good-key'
                }}
              >
                {Object.entries(JSON.parse(localStorage.getItem('uniqueGoodsName') || '{}')).map(([key, name]) => (
                  <MenuItem key={key} value={name}>
                    {name}
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
          '& .MuiCardHeader-content': { mb: [2, 0] }
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
              placeholderText={'Date Picker'}
              customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
            />
          </>
        }
      />
      <CardContent>
        <ReactApexcharts type='bar' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexBarChartGoods
