import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { addPost, fetchPosts } from './Action'
// import { addPost, deletePost, fetchPosts, updatePost } from '../action/Action'
import { adddetail,fetchdetails } from '../action/TeacherAction'

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchdetails.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchdetails.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchdetails.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(adddetail.pending, state => {
      state.status = 'loading'
      })
      .addCase(adddetail.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(adddetail.rejected, (state, action) => {
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
      
      export default detailsSlice.reducer