import { post } from './RequestApi.js'

export async function register(body) {
  const response = await post('register', body)
  return response
}

export async function login(body) {
  const response = await post('login', body)
  return response
}

export async function setLogout(body) {
  const response = await post('logout', body)
  return response
}
