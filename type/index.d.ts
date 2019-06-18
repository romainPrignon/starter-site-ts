import { FormStateMap } from 'redux-form'
import { RouterState } from 'connected-react-router'
export * from './utils'

export type Secret = {
  id: string
}

export type State = {
  domain: {
    lastSecretId: Undefinable<string>;
    secrets: Array<Secret>;
  };
  application: {};
  form: FormStateMap;
  router: RouterState;
}
