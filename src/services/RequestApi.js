export async function post(endpoint, body) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response.json()
}

export async function get(endpoint) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response.json()
}

export async function put(endpoint, body) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response.json()
}

export async function destroy(endpoint) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response.json()
}
