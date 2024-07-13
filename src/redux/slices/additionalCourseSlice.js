import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ course: '', duration: '', exp: [''] }]
export const additionalCourseSlice = createSlice({
  name: 'additionalCourse',
  initialState,
  reducers: {
    setCourse: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addCourse: (state) => [...state, { course: '', duration: '', exp: [''] }],
    removeCourse: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    },
    setCourseExp: (state, action) => {
      const { index, expIndex, value } = action.payload
      const newExp = [...state[index].exp]
      newExp[expIndex] = value
      state[index] = { ...state[index], exp: newExp }
    },
    addCourseExp: (state, action) => {
      const { index } = action.payload
      state[index].exp.push('')
    },
    deleteCourseExp: (state, action) => {
      const { index, expIndex } = action.payload
      const newExp = [...state[index].exp]
      newExp.splice(expIndex, 1)
      state[index] = { ...state[index], exp: newExp }
    }
  }
})

export const {
  setCourse,
  addCourse,
  removeCourse,
  addCourseExp,
  setCourseExp,
  deleteCourseExp
} = additionalCourseSlice.actions

export default additionalCourseSlice.reducer
