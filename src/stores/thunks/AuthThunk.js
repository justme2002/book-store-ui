import { createAsyncThunk } from "@reduxjs/toolkit"
import { URL } from "../../constant"
import { login, getUserLogged, register, verifyAccount } from "../../api/auth"

export const loginAsyncThunk = createAsyncThunk("auth/login", async (payload) => {
  try {
    const response = await login(URL, {
      email: payload.email,
      password: payload.password
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
})

export const registerAsyncThunk = createAsyncThunk("auth/register", async (payload) => {
  try {
    const response = await register(URL, {
      username: payload.username,
      email: payload.email,
      password: payload.password
    })
    return response
  } catch (error) {
    console.log(error)
  }
})

export const getUserLoggedAsyncThunk = createAsyncThunk("auth/user-logged", async (payload) => {
  try {
    const response = await getUserLogged(URL, payload.accessToken)
    return response
  } catch (error) {
    console.log(error) 
  }
})

export const sendVerificationMailAsyncThunk = createAsyncThunk("auth/send-mail", async (payload) => {
  try {
    const response = await verifyAccount(URL, payload.email)
    return response
  } catch (error) {
    console.log(error)
  }
})