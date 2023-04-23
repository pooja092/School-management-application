import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addtime, fetchtimes } from '../action/TimeTableAction'
// import { addTime, fetchTimes } from '../action/TimeTableAction'


 const timesSlice = createSlice({
    name: 'times',
    initialState: {
    tab: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchtimes.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchtimes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.tab = action.payload
      })
      .addCase(fetchtimes.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(addtime.pending, state => {
        state.status = 'loading'
        })
        .addCase(addtime.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.tab.push(action.payload)
        })
        .addCase(addtime.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        })




    }
})

export default timesSlice.reducer

