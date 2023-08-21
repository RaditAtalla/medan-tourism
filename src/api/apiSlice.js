import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.medantourism.pemkomedan.go.id/api' }),
  tagTypes: [],
  endpoints: (builder) => ({})
})
