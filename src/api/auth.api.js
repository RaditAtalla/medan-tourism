import { apiSlice } from './apiSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
        credentials: 'include'
      })
    }),
    sendOTP: builder.mutation({
      query: (body) => ({
        url: '/send-otp',
        method: 'POST',
        body,
        credentials: 'include'
      })
    }),
    verifyOTP: builder.mutation({
      query: (body) => ({
        url: '/verify-otp',
        method: 'POST',
        body,
        credentials: 'include'
      })
      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   try {
      //     const { data } = await queryFulfilled
      //     dispatch(setUserInfo(data))
      //   } catch (err) {
      //     console.log(err)
      //   }
      // }
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
        credentials: 'include'
      })
    })
    // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
    //   try {
    //     const { data } = await queryFulfilled
    //     await dispatch(setUserInfo(data))
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  })
})

export const { useRegisterMutation, useSendOTPMutation, useVerifyOTPMutation, useLoginMutation } = authApi
