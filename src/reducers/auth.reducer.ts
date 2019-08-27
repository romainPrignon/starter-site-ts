import { State } from '../../type'

const initialState = {
  user: undefined
}

const auth = (state: State['auth'] = initialState, action: any): State['auth'] => {
  console.log(action)
  return state
}

export default auth
