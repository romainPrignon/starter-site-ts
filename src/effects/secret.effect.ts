import { Secret, SecretInput } from '../../type'

export const getSecretById = async (secretId: string): Promise<Secret> => {
  await sleep(5000)

  return {
    id: secretId,
    content: 'this is a secret'
  }
}

export const postSecret = async (secret: SecretInput): Promise<string> => {
  await sleep(5000)
  return `some-secret-id:${secret.content}`
}

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
