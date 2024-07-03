import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ skill: '', level: '' }]
export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkill: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addSkill: (state) => [...state, { skill: '', level: '' }],
    removeSkill: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    }
  }
})

export const { setSkill, addSkill, removeSkill } = skillsSlice.actions

export default skillsSlice.reducer
