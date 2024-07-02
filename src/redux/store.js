import { configureStore } from '@reduxjs/toolkit'
import personalDetailsReducer from './slices/personalDetailsSlice'
import eduReducer from './slices/eduSlice'
export default configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    edu: eduReducer
  }
})
