import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { company: '', position: '', start: '', end: '', exp: [''] }
]
export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProject: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addProject: (state) => [
      ...state,
      { company: '', position: '', start: '', end: '', exp: [''] }
    ],
    removeProject: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    },
    setProjectExp: (state, action) => {
      const { index, expIndex, value } = action.payload
      const newExp = [...state[index].exp]
      newExp[expIndex] = value
      state[index] = { ...state[index], exp: newExp }
    },
    addProjectExp: (state, action) => {
      const { index } = action.payload
      state[index].exp.push('')
    },
    deleteProjectExp: (state, action) => {
      const { index, expIndex } = action.payload
      const newExp = [...state[index].exp]
      newExp.splice(expIndex, 1)
      state[index] = { ...state[index], exp: newExp }
    }
  }
})

export const {
  setProject,
  addProject,
  removeProject,
  setProjectExp,
  addProjectExp,
  deleteProjectExp
} = projectsSlice.actions

export default projectsSlice.reducer
