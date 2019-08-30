import { Secret, SecretInput } from '../../type/domain'

import { sleep } from '../utils'

let secretMap: any = {}

export const getSecretById = async (secretId: string): Promise<Secret> => {
  await sleep(1000)

  if (Math.round(Math.random())) {
    throw new Error('Boom: getSecretById')
  }

  return {
    id: secretId,
    content: secretMap[secretId]
  }
}

export const getSecrets = async (): Promise<Array<Secret>> => {
  await sleep(1000)

  if (Math.round(Math.random())) {
    throw new Error('Boom: getSecrets')
  }

  const fooSecret: Secret = {
    id: 'foo',
    content: 'foo'
  }
  secretMap[fooSecret.id] = fooSecret.content

  const barSecret: Secret = {
    id: 'bar',
    content: 'bar'
  }
  secretMap[barSecret.id] = barSecret.content

  const bazSecret: Secret = {
    id: 'baz',
    content: 'baz'
  }
  secretMap[bazSecret.id] = bazSecret.content

  return Object.values(secretMap)
}

export const postSecret = async (secret: SecretInput): Promise<string> => {
  await sleep(3000)

  if ((Math.round(Math.random()))) {
    throw new Error('Boom: postSecret')
  }

  const id = String(new Date().getTime()).slice(-7)

  secretMap[id] = secret

  return id
}
