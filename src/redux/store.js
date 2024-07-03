import { configureStore } from '@reduxjs/toolkit'
import personalDetailsReducer from './slices/personalDetailsSlice'
import eduReducer from './slices/eduSlice'
import additionalCourseReducer from './slices/additionalCourseSlice'
import achievementsReducer from './slices/achievementsSlice'
import skillsReducer from './slices/skillsSlice'
import projectsReducer from './slices/projectsSlice'
import workReducer from './slices/workSlice'

export default configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    edu: eduReducer,
    additionalCourse: additionalCourseReducer,
    achievements: achievementsReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    work: workReducer
  }
})
