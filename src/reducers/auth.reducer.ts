import { State } from '../../type'

const initialState = {}

const auth = (state: State['auth'] = initialState, action: any): State['auth'] => {
  console.log(action)
  return state
}

export default auth
