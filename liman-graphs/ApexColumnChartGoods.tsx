import { forwardRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import Button from 'src/@core/theme/overrides/button'

const columnColors = {
  bg: '#f8d3ff',
  series1: '#826af9',
  series2: '#d2b0ff'
}

interface ColumnProps {
  goods: {
    date: string;
    GOODS_NAME: string;
    GOODS_GROUP_KEY: number;
    GROUP_NAME: string;
    count: number;
  }[];
  title: string;
}

interface PickerProps {
  start: Date | number
  end: Date | number
}

const ApexColumnChartGoods = ({goods, title }: ColumnProps) => {
  // ** Hook
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  // ** States
  const [endDate, setEndDate] = useState<any>(null)
  const [startDate, setStartDate] = useState<any>(null)
  const [series, setSeries] = useState<any>([])
  const [active, setActive] = useState<string | null>("monthly")

  let flag = 0 //0 - OK, 1 - Too many buckets, 2 - No data

  const shortName = {
    "Adi Metaller ve Adi Metallerden Eşya": "Adi Metaller",
    "Ağaç ve Ahşap Eşya": "Ağaç Eşya",
    "Ayakkabılar, Başlıklar, Şemsiyeler vb.": "Giysi ve Aksesuar",
    "Bitkisel Ürünler": "Bitkiler",
    "Canlı Hayvanlar ve Hayvansal Ürünler": "Hayvanlar",
    "Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya": "Dokuma Maddeleri",
    "Gıda Sanayii Müstahzarları": "Gıda Sanayii",
    "Ham Postlar ve Derile vb. Maddelerden Mamul Eşya": "Deri Mamulleri",
    "Hayvansal ve bitkisel katı ve sıvı yağlar": "Yağlar",
    "Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri": "Kimya Ürünleri",
    "Makinalar ve Mekanik Cihazlar": "Makineler",
    "Mineral Maddeler": "Mineraller",
    "Muhtelif Mamul Eşya": "Çeşitli Mamuller",
    "Nakil Vasıtaları": "Taşıtlar",
    "Odun ve Geri Kazanılmış Kağıt veya Karton vb.": "Geri Dönüşüm",
    "Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar": "Tıbbi Aletler",
    "Plastikler ve Mamulleri; Kauçuk ve Mamulleri": "Plastik ve Kauçuk",
    "Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar": "Sanat ve Antika",
    "Silahlar ve Mühimmat": "Silahlar",
    "Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya": "İnşaat Malzemeleri",
    };

  function createSeries(){

    const categories = getCategories();
  
    const groups = [...new Set(goods.map(item => item.GOODS_GROUP_KEY))];
  
    if(categories.length > 0){
      const series = groups.map(groupKey => {
        const groupData = categories.map(category => {
          const sum = goods.reduce((acc, item) => {
            if (item.GOODS_GROUP_KEY === groupKey && item.date.startsWith(category) && item.GROUP_NAME != undefined && item.GOODS_GROUP_KEY !== undefined && item.GROUP_NAME !== undefined) {
              return acc + item.count;
            } else {
              return acc;
            }
          }, 0);
    
          return sum;
        });
    
        if(shortName[goods.find(index => index.GOODS_GROUP_KEY === groupKey)?.GROUP_NAME]){
          return {
            name: shortName[goods.find(index => index.GOODS_GROUP_KEY === groupKey)?.GROUP_NAME],
            data: groupData
          };
        }else{
          return {
            name: '',
            data: []
          };
        }
      });

      setSeries(series.filter(item => item.name != ''));
      return;
    }
    setSeries([])
  }

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    createSeries();
  }

  const handleActive = (event: MouseEvent<HTMLElement>, newActive: string | null) => {
    setActive(newActive)
  }


  function getCategories(): string[] | null {
    let categories: string[] = [];
  
    if (active === 'yearly') {
      categories = [...new Set(goods.map(item => item.date.slice(0, 4)))];
    } else if (active === 'monthly') {
      categories = [...new Set(goods.map(item => item.date.slice(0, 7)))];
    } 
  
    if (startDate || endDate) {
      categories = categories.filter(category => {
        if (startDate && new Date(category) < startDate) return false;
        if (endDate && new Date(category) > endDate) return false;
        return true;
      });
    }


    if (categories.length == 0) {
      flag = 2;
      return [];
    }
    if (categories.length > 50) {
      flag = 1;
      return [];
    } else {
      flag = 0;
      return categories;
    }
  }

  
  useEffect(() => createSeries(), [goods, startDate, endDate, active])

  const options: ApexOptions = {
    chart: {
      offsetX: -10,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    fill: { opacity: 1 },
    dataLabels: { enabled: false },
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
    stroke: {
      show: true,
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarRadius: 10,
        }
      }
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true }
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
      categories: getCategories(),
      crosshairs: {
        stroke: { color: theme.palette.divider }
      },
      labels: {
        style: { colors: theme.palette.text.secondary }
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      }
    ]
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
        title={t("GoodsGraphTitle")}
        subheader={
          <ToggleButtonGroup exclusive value={active} onChange={handleActive}>
            <ToggleButton value='yearly'>{t("Yearly")}</ToggleButton>
            <ToggleButton value='monthly'>{t("Monthly")}</ToggleButton>
          </ToggleButtonGroup>
        }
        subheaderTypographyProps={{ sx: { marginTop:'15px', color: theme => `${theme.palette.text.disabled} !important` } }}
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
            placeholderText={t("DatePicker")}
            customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
          />
          </>
        }
      />
      <CardContent>
        
        <CardContent>
        {flag == 1? (
          <div><h3>Pool is too lanrge unable to show</h3></div>
        ) : ''}
        {flag == 2 ? (
          <div><h3>No data to show, check your date range</h3></div>
        ) : ''}
        {flag == 0 ? (
            <ReactApexcharts type='bar' height={400} options={options} series={series} />
        ) : ''}
        
       </CardContent>
      </CardContent>
    </Card>
  )
}

export default ApexColumnChartGoods
