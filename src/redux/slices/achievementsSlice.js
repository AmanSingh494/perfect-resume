import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ name: '', event: '', organiser: '', year: '' }]
export const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setAchievement: (state, action) => {
      const { index, field, value } = action.payload
      state[index] = { ...state[index], [field]: value }
    },

    addAchievement: (state) => [
      ...state,
      { name: '', event: '', organiser: '', year: '' }
    ],
    removeAchievement: (state, action) => {
      const { index } = action.payload
      state.splice(index, 1)
    }
  }
})

export const { setAchievement, addAchievement, removeAchievement } =
  achievementsSlice.actions

export default achievementsSlice.reducer
