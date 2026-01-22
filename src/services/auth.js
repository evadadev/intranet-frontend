import { post } from './RequestApi.js'

export async function setRegister(body) {
  const response = await post('register', body)
  return response
}

export async function setLogin(body) {
  const response = await post('login', body)
  return response
}

export async function setLogout(body) {
  const response = await post('logout', body)
  return response
}
