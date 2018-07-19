import axios from 'axios'

export const getSecretById = async (secretId) => {
  const response = await axios.get(
    `https://sketch-api.romainprignon.fr/whisper/${secretId}`,
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  )

  return response.data
}

export const postSecret = async (secret) => {
  const response = await axios.post(
    `https://sketch-api.romainprignon.fr/listen`,
    secret,
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  )

  return response.data
}
