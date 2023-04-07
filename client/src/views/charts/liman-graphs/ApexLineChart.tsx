// ** MUI Imports
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import LineChartProps from './props/LineChartProps';


const ApexLineChart = ({goods, groups }:LineChartProps) => {
  // ** Hook
  const theme = useTheme();
  const { t, i18n } = useTranslation()

  const [series, setSeries] = useState<any>([])
  const [selectedOption, setSelectedOption] = useState<number>(-1)


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

  const selectorOptions = [{GOODS_GROUP_KEY: -1, GROUP_NAME: "All"}, ...groups];

  const handleOptionChange = (value : string | null) => {
    console.log(value);
    setSelectedOption(selectorOptions.find(item=>item.GROUP_NAME == value) ?.GOODS_GROUP_KEY|| -1);
    console.log(selectedOption);
    
  };


  function createSeries() {
    const groupedData = goods.filter(item=>item.GOODS_GROUP_KEY == selectedOption || selectedOption == -1).reduce((acc, cur) => {
      const groupName = shortName[cur.GROUP_NAME];
      const date = cur.date;
      const count = cur.count;
      if (!acc[groupName]) {
        acc[groupName] = {};
      }
      if (!acc[groupName][date]) {
        acc[groupName][date] = 0;
      }
      acc[groupName][date] += count;
      return acc;
    }, {});
    
    const dates = getCategories();

    const result = Object.entries(groupedData)
    .map(([groupName, datesObj]) => {
      const data = dates.map(date => datesObj[date] || 0);
      return { name: groupName, data };
    });

    console.log(groupedData);
    

    setSeries(result);
  }


  function getCategories() {
    const uniqueDates = [...new Set(goods.map(good => good.date))];
    return uniqueDates.sort();
  }

  
  useEffect(() => createSeries(), [goods, selectedOption])

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

  return (
    <Card>
      <CardHeader
        title={t("GoodsGraphTitle")}
        subheader='Commercial networks & enterprises'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <Autocomplete
                  sx={{ width: 400 }}
                  options={selectorOptions.map(item=>item.GROUP_NAME)}
                  defaultValue={t("All")}
                  id='autocomplete-outlined'
                  renderInput={params => <TextField {...params} label='Product Type' />}
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

export default ApexLineChart
