// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Helpers
import { getUrl } from 'src/helpers/api/getter'

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

export const redeployModel = createAsyncThunk(
  'models/redeployModel',
  async (params: any, { dispatch, getState }: ReduxType) => {
    const response = await axios.post(getUrl(`model/${params.id}/redeployModelFile`), params.formData)
    if (response.status === 200) {
      dispatch(redeployModelMetadata(params))
    }
  }
)

export const redeployModelMetadata = createAsyncThunk(
  'models/redeployModelMetadata',
  async (params: any, { dispatch, getState }: ReduxType) => {
    const response = await axios.post(getUrl(`model/${params.id}/redeployModelMetadata`), params.metadata)
    console.log(response)
    if (response.status === 200) {
      dispatch(fetchData())
    }
  }
)

export const appModelSlice = createSlice({
  name: 'appModels',
  initialState: {
    models: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.models = action.payload.data
    })
  }
})

export default appModelSlice.reducer
