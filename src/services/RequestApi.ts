const token = localStorage.getItem('token')
const isToken = () => {
  !token ? null : token
}

export async function post(endpoint, body) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${isToken()}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response.json()
}

export async function get(endpoint: string) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response.json()
}

export async function put(endpoint: string, body: Record<string, any>) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response.json()
}

export async function destroy(endpoint: string) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response.json()
}
