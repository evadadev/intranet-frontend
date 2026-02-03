import { post } from './RequestApi.js'

export async function register(body: Record<string, any>) {
  const response = await post('register', body)
  return response
}

export async function login(body: Record<string, any>) {
  const response = await post('login', body)
  return response
}

export async function logout(body: Record<string, any>) {
  const response = await post('logout', body)
  return response
}
