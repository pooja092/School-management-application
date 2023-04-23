import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('http://localhost:5000/posts')
    const data = await response.json()
    return data
  })
  
  
  export const addPost = createAsyncThunk('posts/addPost', async (post) => {
    const response = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    return data
  })


  // const updatePost: (state, action) => {
  //   const {id, name, email} = action.payload;
  //   const uu = state.find(user => user.id == id);
  //   if(uu) {
  //       uu.name = name;
  //       uu.email = email;
  //   }
  // },



  export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
   
    const response = await fetch(`http://localhost:5000/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    return data
  })

  

  // export const updatePost = createAsyncThunk('user/updatePost', async (post) => {
  //   try {
  //      await updatePost((`/${post}`)); 
  //     return await updatePost(('http://localhost:5000/posts' ))
  //   } catch (error) {
  //     // return rejectWithValue(error.message);
  //   }
  // });

  // export const updatePost = (id, newData) => {
  //   return async (dispatch) => {
  //     try {
  //       const response = await axios.put(`http://localhost:5000/posts/${id}`, newData);
  //       dispatch({ type: 'UPDATE_DATA_SUCCESS', payload: response.data });
  //     } catch (error) {
  //       dispatch({ type: 'UPDATE_DATA_ERROR', error });
  //     }
  //   };
  // };


  // export const postUpdated = post => ({
  //   type: 'posts/postUpdated',
  //   payload: post
  // })
  
  // export const postDeleted = id => ({
  //   type: 'posts/postDeleted',
  //   payload: id
  // })

  // export const updatePost = (id, data) => {
  //   return async dispatch => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/posts/${id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //       })
  
  //       if (!response.ok) {
  //         throw new Error('Failed to update post.')
  //       }
  
  //       const post = await response.json()
  
  //       dispatch(postUpdated(post))
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }
  
  // export const deletePost = id => {
  //   return async dispatch => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/posts/${id}`, {
  //         method: 'DELETE'
  //       })
  
  //       if (!response.ok) {
  //         throw new Error('Failed to delete post.')
  //       }
  
  //       dispatch(postDeleted(id))
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }





  // export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
  //   const response = await fetch('http://localhost:3001/posts/'+id, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state.singledata)
  //   })
  //   const data = await response.json()
  //   return data
  // })


  // export const deletePost = createAsyncThunk('posts/deletePost', async (post) => {
  //   const response = await fetch('http://localhost:3001/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(post)
  //   })
  //   const data = await response.json()
  //   return data
  // })
  


  // export const updateHomeList = createAsyncThunk('user/updateHomeList', async (page, { rejectWithValue }) => {
  //   try {
  //      await updateDoc(doc(db, `home/${page}`)); 
  //     return await updateDoc(collection(db,"home"))
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // });



  // export const deletePost = createAsyncThunk('posts/deletePost', async (post, { rejectWithValue }) => {
  //   try {
  //     //  await deleteDoc(doc(db, `about/${post}`)); 
  //     // return await deleteDoc(collection(db,"about"))
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // })  ;


  // export const deleteAboutList = createAsyncThunk('user/deleteAboutList', async (page, { rejectWithValue }) => {
  //   try {
  //      await deleteDoc(doc(db, `about/${page}`)); 
  //     return await deleteDoc(collection(db,"about"))
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // })  ;

  



  // export const editPost = createAsyncThunk('posts/editPost', async (post) => {
  //   const response = await fetch('http://localhost:3001/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(post)
  //   })
  //   const data = await response.json()
  //   return data
  // })
  