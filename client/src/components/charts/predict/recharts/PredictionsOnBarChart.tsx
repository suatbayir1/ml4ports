import React from 'react'

// ** MUI Imports
import { Typography, Grid, Box, Divider } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Actions
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { MLModelType } from 'src/types/components/mlTypes'

// ** Distribution Data
import {
  fiveDayDistribution,
  sevenDayDistribution,
  fifteenDayDistribution,
  thirtyDayDistribution,
  sixtyDayDistribution
} from 'src/@fake-db/charts/predict'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'

// ** recharts
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  BarChart,
  TooltipProps,
  Bar,
  Legend
} from 'recharts'

type Props = {
  model: MLModelType
}

const CustomBarTooltip = (data: TooltipProps<any, any>) => {
  const { active, payload } = data

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label === 'yes' ? 'Will be checked' : 'Will NOT be checked'}</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: i.fill, mr: 2.5 } }} key={i.dataKey}>
                <Icon icon='mdi:circle' fontSize='0.6rem' />
                <Typography variant='body2'>{`${i.dataKey} : ${i.payload[i.dataKey]}`}</Typography>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const PredictionsOnBarChart = (props: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.model)
  console.log('store', store)

  const getPredictionResult = (): number => {
    switch (props.model.modelName) {
      case '7 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_7d
      case '5 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_5d
      case '15 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_15d
      case '30 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_30d
      case '60 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_60d
      default:
        return 0
    }
  }

  const getDistributionData = (): any[] => {
    switch (props.model.modelName) {
      case '7 Gün Gemi Sayısı Tahmini':
        return store.distributionOfTotalShipCountByDays.seven_days
      case '5 Gün Gemi Sayısı Tahmini':
        return store.distributionOfTotalShipCountByDays.five_days
      case '15 Gün Gemi Sayısı Tahmini':
        return store.distributionOfTotalShipCountByDays.fifteen_days
      case '30 Gün Gemi Sayısı Tahmini':
        return store.distributionOfTotalShipCountByDays.thirty_days
      case '60 Gün Gemi Sayısı Tahmini':
        return store.distributionOfTotalShipCountByDays.sixty_days
      default:
        return []
    }
  }

  const getLegendName = (): string => {
    switch (props.model.modelName) {
      case '7 Gün Gemi Sayısı Tahmini':
        return '7-day ship count'
      case '5 Gün Gemi Sayısı Tahmini':
        return '5-day ship count'
      case '15 Gün Gemi Sayısı Tahmini':
        return '15-day ship count'
      case '30 Gün Gemi Sayısı Tahmini':
        return '30-day ship count'
      case '60 Gün Gemi Sayısı Tahmini':
        return '60-day ship count'
      default:
        return ''
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.0 }}>
            Prediction Result:
          </Typography>
          <Typography variant='h5' sx={{ mr: 1.5, color: getPredictionResult() >= 10 ? '#FF4C51' : '#56CA00' }}>
            {getPredictionResult()}
          </Typography>{' '}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <RechartsWrapper>
          <Box sx={{ height: 350, color: 'black' }}>
            <ResponsiveContainer>
              <BarChart
                height={350}
                width={800}
                data={getDistributionData()}
                barSize={60}
                margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
              >
                <CartesianGrid opacity={0.5} />
                <XAxis dataKey='x' />
                <YAxis />
                <Tooltip content={CustomBarTooltip} />
                <Legend />
                <Bar name={getLegendName()} dataKey='y' fill='#8884d8' />
                <ReferenceLine
                  x={getPredictionResult()}
                  stroke={getPredictionResult() >= 10 ? '#FF4C51' : '#56CA00'}
                  strokeWidth={3}
                >
                  <Label
                    value={'Current Prediction'}
                    position={'insideTopLeft'}
                    style={{ fontSize: '80%', fill: getPredictionResult() ? '#FF4C51' : '#56CA00' }}
                  />
                </ReferenceLine>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </RechartsWrapper>
      </Grid>
    </Grid>
  )
}

export default PredictionsOnBarChart
