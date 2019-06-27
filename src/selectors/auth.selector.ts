import { State } from '../../type'

export const isAuth = (state: State): boolean =>
  process.env.NODE_ENV === 'production'
    ? Boolean(state.auth.user)
    : true
