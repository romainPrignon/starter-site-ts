import { FormStateMap } from 'redux-form'
import { RouterState } from 'connected-react-router'

export type Secret = {}

export type State = {
  domain: {
    lastSecretId: string;
    secrets: Array<Secret>;
  };
  application: {};
  form: FormStateMap;
  router: RouterState;
}
