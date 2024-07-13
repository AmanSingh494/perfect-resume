import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { company: '', position: '', start: '', end: '', exp: [''] }
]
export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setWork: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },
    setWorkExp: (state, action) => {
      const { index, expIndex, value } = action.payload
      const newExp = [...state[index].exp]
      newExp[expIndex] = value
      state[index] = { ...state[index], exp: newExp }
    },
    addWorkExp: (state, action) => {
      const { index } = action.payload
      state[index].exp.push('')
    },
    deleteWorkExp: (state, action) => {
      const { index, expIndex } = action.payload
      const newExp = [...state[index].exp]
      newExp.splice(expIndex, 1)
      state[index] = { ...state[index], exp: newExp }
    },
    addWork: (state) => [
      ...state,
      { company: '', position: '', start: '', end: '', exp: [] }
    ],
    removeWork: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    }
  }
})

export const {
  setWork,
  addWork,
  setWorkExp,
  removeWork,
  addWorkExp,
  deleteWorkExp
} = workSlice.actions

export default workSlice.reducer
