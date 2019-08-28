import { Optional } from './utils'

export type LOGIN = 'LOGIN'
export type LOGOUT = 'LOGOUT'

export type User = {
  id: string
  name: string
}

export type Credentials = {
  email: string
  password: string
}

export type LoginAction = {
  type: LOGIN
  payload: User
}

export type LogoutAction = {
  type: LOGOUT
}

export type AuthAction = LoginAction | LogoutAction

export type AuthState = {
  user: Optional<User>
}
