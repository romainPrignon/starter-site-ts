import { Secret, SecretInput } from '../../type/domain'

import { sleep } from '../utils'

let secretMap: any = {}

export const getSecretById = async (secretId: string): Promise<Secret> => {
  await sleep(500)

  return {
    id: secretId,
    content: secretMap[secretId].content
  }
}

export const postSecret = async (secret: SecretInput): Promise<string> => {
  await sleep(500)

  const id = String(new Date().getTime()).slice(-7)

  secretMap[id] = secret

  return id
}
