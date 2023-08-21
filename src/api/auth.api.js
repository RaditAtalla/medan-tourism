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
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
        credentials: 'include'
      })
    })
  })
})

export const { useRegisterMutation, useSendOTPMutation, useVerifyOTPMutation, useLoginMutation } = authApi
