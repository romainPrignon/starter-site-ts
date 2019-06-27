import { State } from '../../type'

export const isAuth = (state: State): boolean =>
  Boolean(state.auth.user)
