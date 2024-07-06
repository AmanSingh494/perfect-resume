import { createSlice } from '@reduxjs/toolkit'

export const personalDetailsSlice = createSlice({
  name: 'personalDetails',
  initialState: {
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    about: '',
    linktree: ''
  },
  reducers: {
    setPersonalDetails: (state, action) => {
      const { field, value } = action.payload
      state[field] = value
    }
  }
})

export const { setPersonalDetails } = personalDetailsSlice.actions

export default personalDetailsSlice.reducer
