// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NotificationManager } from 'react-notifications'

// ** Axios Imports
import axios, { AxiosError } from 'axios'

// ** Helpers
import { getUrl, getMlUrl } from 'src/helpers/api/getter'

// ** Types
import { Dispatch } from 'redux'

interface ReduxType {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Models
export const fetchData = createAsyncThunk('models/getTrainedModels', async () => {
  const response = await axios.get(getUrl('model/getTrainedModelsMetadata'))
  return response.data
})

export const fetchDistributionOfTotalShipCountByDays = createAsyncThunk(
  'get_distribution_of_total_ship_count_by_days',
  async () => {
    const response = await axios.get(getMlUrl('get_distribution_of_total_ship_count_by_days'))
    console.log('1', response.data)
    return response.data
  }
)

export const redeployModel = createAsyncThunk(
  'models/redeployModel',
  async (params: any, { dispatch, getState }: ReduxType) => {
    try {
      const response = await axios.post(getUrl(`model/${params.id}/redeployModelFile`), params.formData)
      if (response.status === 200) {
        dispatch(redeployModelMetadata(params))
      }
    } catch (error: any) {
      NotificationManager.error(error.response.data.message, 'Error', 3000)
    }
  }
)

export const predict = createAsyncThunk('models/predict', async (params: any, { dispatch }: ReduxType) => {
  try {
    const response = await axios.post(params.endpoint, params.payload)
    dispatch(setShowingResult(true))
    return response.data
  } catch (error: any) {
    if (error.response.status === 422) {
      NotificationManager.error('Please check the inputs', 'Error', 3000)
    } else {
      NotificationManager.error(error.message, 'Error', 3000)
    }
  } finally {
    dispatch(setWaitingRequest(false))
  }
})

export const redeployModelMetadata = createAsyncThunk(
  'models/redeployModelMetadata',
  async (params: any, { dispatch, getState }: ReduxType) => {
    const response = await axios.post(getUrl(`model/${params.id}/redeployModelMetadata`), params.metadata)
    if (response.status === 200) {
      dispatch(fetchData())
      params.handleClose()
      NotificationManager.success('The model redeployed successfully', 'Success', 3000)
    } else {
      NotificationManager.error('An error occurred while updating the model metadata', 'Error', 3000)
    }
  }
)

export const appModelSlice = createSlice({
  name: 'appModels',
  initialState: {
    models: [],
    distributionOfTotalShipCountByDays: {
      five_days: [],
      seven_days: [],
      fifteen_days: [],
      thirty_days: [],
      sixty_days: []
    },
    predictResult: { next_7d: 0, next_5d: 0, next_15d: 0, next_30d: 0, next_60d: 0 },
    waitingRequest: false,
    showingResult: false
  },
  reducers: {
    setWaitingRequest: (state, action) => {
      state.waitingRequest = action.payload
    },
    setShowingResult: (state, action) => {
      state.showingResult = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.models = action.payload.data
    })
    builder.addCase(fetchDistributionOfTotalShipCountByDays.fulfilled, (state, action) => {
      console.log('payload', action.payload)
      state.distributionOfTotalShipCountByDays = action.payload
    })
    builder.addCase(predict.fulfilled, (state, action) => {
      state.predictResult = action.payload
    })
  }
})

export const { setWaitingRequest, setShowingResult } = appModelSlice.actions

export default appModelSlice.reducer
