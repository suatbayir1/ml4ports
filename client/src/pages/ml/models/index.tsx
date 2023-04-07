// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Demo Components Imports
import MachineLearningModelInfoCard from 'src/components/cards/advanced/MachineLearningModelInfoCard'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/store/apps/model'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { MLModelType } from 'src/types/components/mlTypes'

type Props = {}

const data: MLModelType[] = [
  {
    modelName: 'Model A',
    trainer: 'Jason Statham',
    trainDate: new Date(),
    accuracy: 94,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Ensemble',
    metrics: {}
  },
  {
    modelName: 'Model B',
    trainer: 'Tom Cruise',
    trainDate: new Date(),
    accuracy: 40,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model C',
    trainer: 'Morgan Freeman',
    trainDate: new Date(),
    accuracy: 55,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model A',
    trainer: 'Jason Statham',
    trainDate: new Date(),
    accuracy: 94,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model B',
    trainer: 'Tom Cruise',
    trainDate: new Date(),
    accuracy: 40,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model C',
    trainer: 'Morgan Freeman',
    trainDate: new Date(),
    accuracy: 55,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model A',
    trainer: 'Jason Statham',
    trainDate: new Date(),
    accuracy: 94,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model B',
    trainer: 'Tom Cruise',
    trainDate: new Date(),
    accuracy: 40,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  },
  {
    modelName: 'Model C',
    trainer: 'Morgan Freeman',
    trainDate: new Date(),
    accuracy: 55,
    period: 5,
    input: 'input',
    output: 'output',
    modelType: 'Single',
    metrics: {}
  }
]

const index = (props: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.model)
  console.log(store.models)
  useEffect(() => {
    console.log('fetch')
    dispatch(fetchData())
  }, [dispatch])

  return (
    <Grid container spacing={6}>
      {store.models.map((model: MLModelType, index: number) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <MachineLearningModelInfoCard model={model} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default index
