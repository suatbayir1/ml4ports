// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Models
export const fetchData = createAsyncThunk('models/getTrainedModels', async () => {
  console.log('fetch data request')
  const response = await axios.get('http://localhost:5000/api/model/getTrainedModelsMetadata')
  console.log(response.data)
  return response.data
})

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
