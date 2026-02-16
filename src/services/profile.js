import { get, put } from './RequestApi'

export async function getProfile(id) {
  const response = await get(`users/${id}/profile`)
  return response
}

export async function putProfile(body, id) {
  const response = await put(`profile/${id}`, body)
  return response
}
