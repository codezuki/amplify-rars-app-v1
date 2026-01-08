export const isRequired = (value) => {
  return value && value.trim() !== ''
}

export const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
