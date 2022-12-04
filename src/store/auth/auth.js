import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: true,
  admin: true,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers:{

  }
    
})

// Action creators are generated for each case reducer function
export const { changeLogin } = auth.actions

export default auth.reducer