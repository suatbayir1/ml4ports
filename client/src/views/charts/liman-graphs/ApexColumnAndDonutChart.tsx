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
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Button from 'src/@core/theme/overrides/button'
import LineChartProps from './props/LineChartProps'

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

const ApexColumnAndDonutChart = ({goods, groups }: LineChartProps) => {
  // ** Hook
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  // ** States
  const [endDate, setEndDate] = useState<any>(null)
  const [startDate, setStartDate] = useState<any>(null)
  const [seriesColumn, setSeriesColumn] = useState<any>([])
  const [seriesDonut, setSeriesDonut] = useState<any>([])
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

    const handleOnChange = (dates: any) => {
      const [start, end] = dates
      setStartDate(start)
      setEndDate(end)
  
      createSeriesColumn();
      createSeriesDonut();
    }
  
    const handleActive = (event: MouseEvent<HTMLElement>, newActive: string | null) => {
      setActive(newActive)
    }
  

  function createSeriesColumn(){

    const categories = getCategoriesColumn()?.sort();
  
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

      setSeriesColumn(series.filter(item => item.name != '').sort((a, b) => a.name.localeCompare(b.name))
      );
      return;
    }
    setSeriesColumn([])
  }

  function createSeriesDonut(){
    let filteredGoods = goods;

    if(startDate){
      filteredGoods = endDate ? goods.filter(item => {
        const date = new Date(item.date);
        return date >= startDate && date <= endDate;
      }) : goods.filter(item => {
        const date = new Date(item.date);
        return date >= startDate;
      });
    }

    const goodsByGroups = filteredGoods.reduce((acc, item) => {
      if (!acc[shortName[item.GROUP_NAME]]) {
        acc[shortName[item.GROUP_NAME]] = [];
      }
      acc[shortName[item.GROUP_NAME]].push(item);
      return acc;
    }, {});
  

    

    // Next, iterate over the regimes and sum the count values for each series
    const series = groups.map(item => {
      const goodsForGroups = goodsByGroups[shortName[item.GROUP_NAME]] || [];
      const countForGroups = goodsForGroups.reduce((acc, item) => acc + item.count, 0);
      return countForGroups;
    });
  
    console.log(series);
    

    setSeriesDonut(series);
  }

  

  function getCategoriesColumn(): string[] | null {
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


  
  useEffect(() => createSeriesColumn(), [goods, startDate, endDate, active])
  useEffect(() => createSeriesDonut(), [goods, startDate, endDate])

  const optionsColumn: ApexOptions = {
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
      categories: getCategoriesColumn(),
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

  const optionsDonut: ApexOptions = {
    stroke: { width: 0 },
    labels: groups.filter(item => shortName[item.GROUP_NAME]).map(item => shortName[item.GROUP_NAME]).sort(),
    dataLabels: {
      enabled: true,
      formatter: (val: string) => `${parseInt(val, 10)}%`
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      labels: { colors: theme.palette.text.secondary },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false, // set to false to hide both name and value labels
            name: {
              fontSize: '1.2rem'
            },
            value: {
              fontSize: '1.2rem',
              color: theme.palette.text.secondary,
              formatter: (val: string) => `${parseInt(val, 10)}`
            },
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }
  
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
        <Grid item container spacing={6} xs={12}>
              <Grid item md={4} xs={6}>
                <ReactApexcharts type='donut' height={400} options={optionsDonut} series={seriesDonut} />
              </Grid>
              <Grid item md={8} xs={12}>
                {flag == 1? (
                  <div><h3>Pool is too lanrge unable to show</h3></div>
                ) : ''}
                {flag == 2 ? (
                  <div><h3>No data to show, check your date range</h3></div>
                ) : ''}
                {flag == 0 ? (
                    <ReactApexcharts type='bar' height={400} options={optionsColumn} series={seriesColumn} />
                ) : ''}
              </Grid>
            </Grid>
      </CardContent>
    </Card>
  )
}

export default ApexColumnAndDonutChart
