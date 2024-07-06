import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ course: '', duration: '', exp: '' }]
export const additionalCourseSlice = createSlice({
  name: 'additionalCourse',
  initialState,
  reducers: {
    setCourse: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addCourse: (state) => [...state, { course: '', duration: '', exp: '' }],
    removeCourse: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    }
  }
})

export const { setCourse, addCourse, removeCourse } =
  additionalCourseSlice.actions

export default additionalCourseSlice.reducer
