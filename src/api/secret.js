import axios from 'axios'

export const getSecretById = async (secretId) => {
  const response = await axios.get(`http://localhost:4000/whisper/${secretId}`)

  return response.data
}

export const postSecret = async (secret) => {
  const response = await axios.post(`http://localhost:4000/listen`, secret)

  return response.data
}
