import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ course: '', institution: '', year: '', marks: '' }]
export const eduSlice = createSlice({
  name: 'edu',
  initialState,
  reducers: {
    setEdu: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addEdu: (state) => [
      ...state,
      { course: '', institution: '', year: '', marks: '' }
    ]
  }
})

export const { setEdu, addEdu } = eduSlice.actions

export default eduSlice.reducer
