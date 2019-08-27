import { FormStateMap } from 'redux-form'
import { RouterState } from 'connected-react-router'
import { AuthState } from './auth'
import { AppState } from './app'
import { DomainState } from './domain'

export type State = {
  readonly auth: AuthState
  readonly app: AppState
  readonly domain: DomainState
  readonly form: FormStateMap
  readonly router: RouterState
}
