import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { addPost, fetchPosts } from './Action'
import { addPost, fetchPosts, updatePost,  } from '../action/Action'



const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })



      
      .addCase(addPost.pending, state => {
      state.status = 'loading'
      })
      .addCase(addPost.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addPost.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })


  

      .addCase(updatePost.pending, state => {
        state.status = 'loading'
        })
        .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.data.findIndex((post) => post.id === action.payload.id)
        state.data[index] = action.payload
        // state.data.push(action.update)
        })
        .addCase(updatePost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        })




      // [updateHomeList.pending]: (state) => {
      //   state.isLoading = true;
      // },
      // [updateHomeList.fulfilled]: (state, { payload }) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.home = payload.docs.map((doc)=>({id:doc.id, ...doc.data() }))
      // },
      // [updateHomeList.rejected]: (state, { payload }) => {
      //   state.isLoading = false;
      //   state.isSuccess = false;
      //   state.errorMessage = payload
      // }




      
      
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
      
      export default postsSlice.reducer