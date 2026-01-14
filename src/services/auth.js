import RequestApi from './RequestApi.js'

export async function setRegister(body) {
  const response = await RequestApi.post('register', body)
  return response
}

export async function setLogin(body) {
  const response = await RequestApi.post('login', body)
  return response
}

export async function setLogout(body) {
  const response = await RequestApi.post('logout', body)
  return response
}
