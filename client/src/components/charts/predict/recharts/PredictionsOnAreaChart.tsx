import React from 'react'

// ** MUI Imports
import { Typography, Grid, Box, Divider } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Actions
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { MLModelType } from 'src/types/components/mlTypes'

// ** recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  ReferenceLine,
  Label,
  Legend
} from 'recharts'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'

// ** Distribution Data
import { fiveDayDistribution, sevenDayDistribution } from 'src/@fake-db/charts/predict'

type Props = {
  model: MLModelType
}

const CustomLineTooltip = (data: TooltipProps<any, any>) => {
  const { active, payload } = data

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label} days</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: i.fill, mr: 2.5 } }} key={i.dataKey}>
                <Icon icon='mdi:circle' fontSize='0.6rem' />
                <Typography variant='body2'>{`Container ${i.dataKey} : ${i.payload[i.dataKey]}`}</Typography>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const PredictionsOnAreaChart = (props: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.model)

  const getPredictionResult = (): number => {
    switch (props.model.modelName) {
      case '7 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_7d
      case '5 Gün Gemi Sayısı Tahmini':
        return store.predictResult.next_5d
      default:
        return 0
    }
  }

  const getDistributionData = (): any[] => {
    switch (props.model.modelName) {
      case '7 Gün Gemi Sayısı Tahmini':
        return sevenDayDistribution
      case '5 Gün Gemi Sayısı Tahmini':
        return fiveDayDistribution
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
              <AreaChart
                height={350}
                width={800}
                data={getDistributionData()}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid opacity={0.5} />
                <XAxis dataKey='x' label={{ fill: 'white' }} />
                <YAxis label={{ fill: 'white' }} />
                <Tooltip content={CustomLineTooltip} />
                <Area type='monotone' name={getLegendName()} dataKey='y' stroke='#8884d8' fill='rgb(115, 103, 240)' />
                <Legend />
                <ReferenceLine
                  x={getPredictionResult()}
                  stroke={getPredictionResult() >= 10 ? '#FF4C51' : '#56CA00'}
                  strokeWidth={3}
                >
                  <Label
                    value={'Current Prediction'}
                    position={'insideTopLeft'}
                    style={{ fontSize: '80%', fill: getPredictionResult() >= 10 ? '#FF4C51' : '#56CA00' }}
                  />
                </ReferenceLine>
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </RechartsWrapper>
      </Grid>
    </Grid>
  )
}

export default PredictionsOnAreaChart
