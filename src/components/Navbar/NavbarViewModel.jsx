import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useLocalStorage from '../../hooks/useLocalStorage'
import { authSelector } from '../../stores/reducers/AuthReducer'
import { getUserLoggedAsyncThunk } from '../../stores/thunks/AuthThunk'

const NavbarViewModel = () => {
  const { isSuccess, email } = useSelector(authSelector)
  const { get, set } = useLocalStorage()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserLoggedAsyncThunk({
      accessToken: get({
        key: "accessToken"
      })
    }))
  }, [email])

  const signOut = () => {
    set({
      key: "accessToken",
      value: ""
    })
    window.location.reload()
  }

  return {
    isSuccess,
    email,
    signOut
  }
}

export default NavbarViewModel