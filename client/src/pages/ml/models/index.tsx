// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Demo Components Imports
import MachineLearningModelInfoCard from 'src/components/cards/advanced/MachineLearningModelInfoCard'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchDistributionOfTotalShipCountByDays } from 'src/store/apps/model'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { MLModelType } from 'src/types/components/mlTypes'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

type Props = {}

const index = (props: Props) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.model)

  useEffect(() => {
    dispatch(fetchData())
    dispatch(fetchDistributionOfTotalShipCountByDays())
  }, [dispatch])

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        {store.models.map((model: MLModelType, index: number) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <MachineLearningModelInfoCard model={model} type='main-model' />
            </Grid>
          )
        })}
      </Grid>
    </DatePickerWrapper>
  )
}

export default index
