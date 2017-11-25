import axios from 'axios'

export const getSecretById = async (secretId) => {
  const response = await axios.get(`https://sketch-api-tnlkvccvym.now.sh/whisper/${secretId}`)

  return response.data
}

export const postSecret = async (secret) => {
  const response = await axios.post(`https://sketch-api-tnlkvccvym.now.sh/listen`, secret)

  return response.data
}
