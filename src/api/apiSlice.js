import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setLogout } from '../store/features/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://www.medantourism.pemkomedan.go.id/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 'PARSING_ERROR') {
    await AsyncStorage.setItem('token', '')
    api.dispatch(setLogout())
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: (builder) => ({})
})
