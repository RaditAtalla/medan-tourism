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
<<<<<<< HEAD
    }),
    getPlaceDetail: builder.query({
      query: (placeId) => ({
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`
      })
    }),
    getDekatPlaces: builder.query({
      query: (query) => ({
        url: `/places?latitude=${query.lat}&longitude=${query.lng}&radius=20000&keyword=${query.keyword}`
      })
=======
>>>>>>> origin/ferdinan
    })
  })
})

<<<<<<< HEAD
export const { useGetPlacesQuery, useGetPlaceQuery, useGetPlaceDetailQuery, useGetDekatPlacesQuery } = placeApi
=======
export const { useGetPlacesQuery, useGetPlaceDetailQuery } = placeApi
>>>>>>> origin/ferdinan
