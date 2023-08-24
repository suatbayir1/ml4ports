// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
export const getHierarchy = createAsyncThunk('simulation/getHierarchy', async () => {
  const response = await axios.get(getUrl('simulation/getHierarchy'))
  return response.data.data
})

export const simulationSlice = createSlice({
  name: 'simulationSlice',
  initialState: {
    hierarchy: {
      root: {},
      docks: [],
      ships: [],
      cranes: [],
      siteCranes: [],
      trucks: []
    }
  },
  reducers: {
    setHierarchy: (state, action) => {
      state.hierarchy = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getHierarchy.fulfilled, (state, action) => {
      state.hierarchy = action.payload
    })
  }
})

export const { setHierarchy } = simulationSlice.actions

export default simulationSlice.reducer
