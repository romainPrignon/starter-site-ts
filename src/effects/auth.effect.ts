import { User, Credentials } from '../../type/auth'

export const login = async ({ email, password }: Credentials): Promise<User> => {
  console.log('login', email, password)

  return {
    id: 'romainprignon',
    name: 'Romain Prignon'
  }
}

export const logout = async (email: string): Promise<boolean> => {
  console.log('logout', email)
  return Boolean(Math.round(Math.random()))
}
