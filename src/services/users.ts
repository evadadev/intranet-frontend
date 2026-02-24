import { get, put } from './RequestApi'

export async function getUsers(id: number) {
  const response = await get(`users/${id}`)
  return response
}

export async function putUsers(body: Record<string, unknown>, id: number) {
  const response = await put(`users/${id}`, body)
  return response
}
