import { User } from '../../type'

export const login = async ({ login, mdp }: any): Promise<User> => {
  await sleep(5000)

  console.log(login, mdp)

  return {
    id: '1',
    name: 'roro',
    roles: ['admin']
  }
}

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
