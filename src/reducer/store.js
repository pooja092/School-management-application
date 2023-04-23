// json

import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slice/postsSlice";
import detailsSlice from './slice/TeacherSlice'
import timesSlice from './slice/TimeTableSlice'
import feessSlice from "./slice/FeesSlice";
import leavesSlice from "./slice/leaveSlice"
import sallerySlice from "./slice/sallerySlice";





const store = configureStore({
    reducer:{
  
    posts: postsSlice,
    details: detailsSlice,
    times: timesSlice,
    feess: feessSlice,
    leaves: leavesSlice,
    sallerys:sallerySlice
    
    
    
    // times: timesSlice,


    
    },
});

export default store;










// api

//  import thunk from "redux-thunk"
//  import { composeWithDevTools } from "redux-devtools-extension";
//  import { studentReducer } from "./reducers/StudentReducer";
//  import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";


//  const reducer = combineReducers ({

//     students: studentReducer

//  });

// //  let initialState={};
//  const middleware = [thunk];

//  const store = configureStore ({
//     reducer,
//  },

//     composeWithDevTools(applyMiddleware(...middleware))
//  );


//  export default store;








// import { configureStore } from "@reduxjs/toolkit";
// import { studentReducer } from "./reducers/StudentReducer";
// // import postsSlice from "./slice/postsSlice";
// // import detailsSlice from './slice/TeacherSlice'



// const store = configureStore({
//     reducer:{
  
//     // posts: postsSlice,
//     // details: detailsSlice,
//     students: studentReducer


    
//     },
// });

// export default store;













