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


const ApexDonutChart = ({containers, regime_names,startDate,endDate }:ContainerChartProps) => {
  // ** Hook
  const theme = useTheme()
  const [series, setSeries] = useState<any>([])

  function createSeries() {
    let filteredContainers = containers;

    if(startDate){
      filteredContainers = endDate ? containers.filter(container => {
        const date = new Date(container.date);
        return date >= startDate && date <= endDate;
      }) : containers.filter(container => {
        const date = new Date(container.date);
        return date >= startDate;
      });
    }

    const containersByRegime = filteredContainers.reduce((acc, container) => {
      if (!acc[container.REGEME_KEY]) {
        acc[container.REGEME_KEY] = [];
      }
      acc[container.REGEME_KEY].push(container);
      return acc;
    }, {});
  

    console.log(containersByRegime);
    

    // Next, iterate over the regimes and sum the count values for each series
    const series = regime_names.map(regime => {
      const containersForRegime = containersByRegime[regime.REGEME_KEY] || [];
      const countForRegime = containersForRegime.reduce((acc, container) => acc + container.count, 0);
      return countForRegime;
    });
  
    console.log(series);
    

    setSeries(series);
  }
  

  useEffect(() => createSeries(), [containers, startDate, endDate])

  const options: ApexOptions = {
    stroke: { width: 0 },
    labels: regime_names.map(item=>item.DESCRIPTION),
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
            },
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

export default ApexDonutChart
