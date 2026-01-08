const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAuthToken = () => {
  return sessionStorage.getItem('authToken')
}

export const apiRequest = async (url, options = {}) => {
  const token = getAuthToken()

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error('API request failed')
  }

  return response.json()
}
