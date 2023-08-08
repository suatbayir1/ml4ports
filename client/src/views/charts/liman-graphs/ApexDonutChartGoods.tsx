// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { useEffect, useState } from 'react'
import ContainerChartProps from './props/ContainerChartProps'
import LineChartProps from './props/LineChartProps'

const ApexDonutChartGoods = ({ goods, groups, startDate, endDate }: LineChartProps) => {
  // ** Hook
  const theme = useTheme()
  const [series, setSeries] = useState<any>([])

  const shortName = {
    'Adi Metaller ve Adi Metallerden Eşya': 'Adi Metaller',
    'Ağaç ve Ahşap Eşya': 'Ağaç Eşya',
    'Ayakkabılar, Başlıklar, Şemsiyeler vb.': 'Giysi ve Aksesuar',
    'Bitkisel Ürünler': 'Bitkiler',
    'Canlı Hayvanlar ve Hayvansal Ürünler': 'Hayvanlar',
    'Dokumaya Elverişli Maddeler ve Bunlardan Mamul Eşya': 'Dokuma Maddeleri',
    'Gıda Sanayii Müstahzarları': 'Gıda Sanayii',
    'Ham Postlar ve Derile vb. Maddelerden Mamul Eşya': 'Deri Mamulleri',
    'Hayvansal ve bitkisel katı ve sıvı yağlar': 'Yağlar',
    'Kimya Sanayii ve Buna Bağlı Sanayii Ürünleri': 'Kimya Ürünleri',
    'Makinalar ve Mekanik Cihazlar': 'Makineler',
    'Mineral Maddeler': 'Mineraller',
    'Muhtelif Mamul Eşya': 'Çeşitli Mamuller',
    'Nakil Vasıtaları': 'Taşıtlar',
    'Odun ve Geri Kazanılmış Kağıt veya Karton vb.': 'Geri Dönüşüm',
    'Optik Alet ve Cihazlar, Tıbbi veya Cerrahi Alet ve Cihazlar': 'Tıbbi Aletler',
    'Plastikler ve Mamulleri; Kauçuk ve Mamulleri': 'Plastik ve Kauçuk',
    'Sanat Eserleri, Kolleksiyon Eşyası ve Antikalar': 'Sanat ve Antika',
    'Silahlar ve Mühimmat': 'Silahlar',
    'Taş, Alçı, Çimento, Mika veya Benzeri Maddelerden Eşya': 'İnşaat Malzemeleri'
  }

  function createSeries() {
    let filteredGoods = goods

    if (startDate) {
      filteredGoods = endDate
        ? goods.filter(item => {
            const date = new Date(item.date)
            return date >= startDate && date <= endDate
          })
        : goods.filter(item => {
            const date = new Date(item.date)
            return date >= startDate
          })
    }

    const goodsByGroups = filteredGoods.reduce((acc, item) => {
      if (!acc[shortName[item.GROUP_NAME]]) {
        acc[shortName[item.GROUP_NAME]] = []
      }
      acc[shortName[item.GROUP_NAME]].push(item)
      return acc
    }, {})

    // Next, iterate over the regimes and sum the count values for each series
    const series = groups.map(item => {
      const goodsForGroups = goodsByGroups[shortName[item.GROUP_NAME]] || []
      const countForGroups = goodsForGroups.reduce((acc, item) => acc + item.count, 0)
      return countForGroups
    })

    setSeries(series)
  }

  useEffect(() => createSeries(), [goods, startDate, endDate])

  const options: ApexOptions = {
    stroke: { width: 0 },
    labels: groups
      .filter(item => shortName[item.GROUP_NAME])
      .map(item => shortName[item.GROUP_NAME])
      .sort(),
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
            show: true,
            name: {
              fontSize: '1.2rem'
            },
            value: {
              fontSize: '1.2rem',
              color: theme.palette.text.secondary,
              formatter: (val: string) => `${parseInt(val, 10)}`
            }
            // total: {
            //   show: true,
            //   fontSize: '1.2rem',
            //   label: 'Operational',
            //   formatter: () => '31%',
            //   color: theme.palette.text.primary
            // }
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
      // title="title"
      // subheader='Spending on various categories'
      // subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.disabled} !important` } }}
      />
      <CardContent>
        <ReactApexcharts type='donut' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexDonutChartGoods
