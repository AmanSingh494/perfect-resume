import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { company: '', position: '', start: '', end: '', exp: '' }
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
      { company: '', position: '', start: '', end: '', exp: '' }
    ],
    removeProject: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    }
  }
})

export const { setProject, addProject, removeProject } = projectsSlice.actions

export default projectsSlice.reducer
