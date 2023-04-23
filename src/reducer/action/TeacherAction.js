import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchdetails = createAsyncThunk('details/fetchdetails', async () => {
    const response = await fetch('http://localhost:5005/details')
    const item = await response.json()
    return item
  })
  
  export const adddetail = createAsyncThunk('details/adddetail', async (detail) => {
    const response = await fetch('http://localhost:5005/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    })
    const item = await response.json()
    return item
  })



//   export const postUpdated = post => ({
//     type: 'posts/postUpdated',
//     payload: post
//   })
  
//   export const postDeleted = id => ({
//     type: 'posts/postDeleted',
//     payload: id
//   })

//   export const updatePost = (id, data) => {
//     return async dispatch => {
//       try {
//         const response = await fetch(`http://localhost:3001/posts/${id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         })
  
//         if (!response.ok) {
//           throw new Error('Failed to update post.')
//         }
  
//         const post = await response.json()
  
//         dispatch(postUpdated(post))
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }
  
//   export const deletePost = id => {
//     return async dispatch => {
//       try {
//         const response = await fetch(`http://localhost:3001/posts/${id}`, {
//           method: 'DELETE'
//         })
  
//         if (!response.ok) {
//           throw new Error('Failed to delete post.')
//         }
  
//         dispatch(postDeleted(id))
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }





 
  