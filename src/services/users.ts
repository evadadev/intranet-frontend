import { get, put } from './RequestApi'

export async function getUser(id: number) {
  const response = await get(`users/${id}`)
  return response
}

export async function putUser(body: Record<string, unknown>, id: number) {
  const response = await put(`users/${id}`, body)
  return response
}

export async function getUsers() {
  const response = await get(`users`)
  return response
}
