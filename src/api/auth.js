import axios from 'axios'

const login = async (url, { email, password }) => {
  const response = await axios.post(`${url}/verify`, {
    email,
    password
  })
  return response.data
}

const register = async (url, { username, email, password }) => {
  const response = await axios.post(`${url}/register/customer`, {
    username,
    email,
    password
  })
  return response.data
}

const getUserLogged = async (url, token) => {
  const response = await axios({
    url: `${url}/user`,
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data
}

const verifyAccount = async (url, { email }) => {
  try {
    const response = await axios.post(`${url}/send-mail`,
      {
        email
      }
    )
    console.log(response.data)
    return response.data
  } catch (error) {
      console.log(error)
  }
}

export { login, register, getUserLogged, verifyAccount }