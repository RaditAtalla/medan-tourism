import { apiSlice } from './apiSlice'

export const placeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlaces: builder.query({
      query: (keyword) => ({
        url: `/places?latitude=3.5908703751859377&longitude=98.67878532423815&radius=20000&keyword=${keyword}`
      })
    }),
    getPlaceDetail: builder.query({
      query: (id) => ({
        url: `/places/details?place_id=${id}`
      })
    })
  })
})

export const { useGetPlacesQuery, useGetPlaceDetailQuery } = placeApi
