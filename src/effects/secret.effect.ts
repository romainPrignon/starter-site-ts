import { Secret, SecretInput } from '../../type'

import axios from 'axios'

export const getSecretById = async (secretId: string): Promise<Secret> => {
  const response = await axios.get(
    `https://sketch-api.romainprignon.fr/whisper/${secretId}`,
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  )

  return response.data
}

export const postSecret = async (secret: SecretInput): Promise<string> => {
  const response = await axios.post(
    `https://sketch-api.romainprignon.fr/listen`,
    secret,
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  )

  return response.data
}
