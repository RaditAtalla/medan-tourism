import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '../api/apiSlice'
import locationReducer from './features/locationSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    location: locationReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware)
})
