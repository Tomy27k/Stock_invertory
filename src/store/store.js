import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/auth'

export const store = configureStore({
  reducer: {
    authLogin: auth,
  },
})
