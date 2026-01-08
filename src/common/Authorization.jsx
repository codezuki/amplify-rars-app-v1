import { useEffect, useState } from 'react'

const Authorization = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('authToken')
    setIsAuthenticated(!!token)
  }, [])

  if (!isAuthenticated) {
    return null
  }

  return children
}

export default Authorization
