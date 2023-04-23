import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addfees,  fetchfeess } from '../action/FeesAction'



const feessSlice = createSlice({
  name: 'feess',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchfeess.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchfeess.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchfeess.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(addfees.pending, state => {
      state.status = 'loading'
      })
      .addCase(addfees.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addfees.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })



      
      // .addCase(updatePost.pending, state => {
      //   state.status = 'loading'

      //   })
      //   .addCase(updatePost.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   state.data.put(action.payload)
      //   })
      //   .addCase(updatePost.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      //   })
  



      }
      })
      
      export default feessSlice.reducer