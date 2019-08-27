import { Optional } from './utils'

export type User = {
  id: string
  name: string
}

export type AuthState = {
  user: Optional<User>
}
