import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { company: '', position: '', start: '', end: '', exp: '' }
]
export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setWork: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addWork: (state) => [
      ...state,
      { company: '', position: '', start: '', end: '', exp: '' }
    ],
    removeWork: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    }
  }
})

export const { setWork, addWork, removeWork } = workSlice.actions

export default workSlice.reducer
