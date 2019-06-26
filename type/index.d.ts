import { FormStateMap } from 'redux-form'
import { RouterState } from 'connected-react-router'
export * from './utils'

export type Fetchable<T> = {
  data: T
  pending: boolean
  error: Undefinable<Error>
}

export type Secret = {
  id: string
  content: string
}

export type SecretInput = {
  content: string
}

export type State = {
  readonly domain: {
    lastSecretId: Undefinable<string>;
    readonly secrets: Fetchable<ReadonlyArray<Fetchable<Secret>>>
  };
  application: {};
  form: FormStateMap;
  router: RouterState;
}
