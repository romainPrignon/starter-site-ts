import { State } from '../../type'
import { Optional } from '../../type/utils'

export const getCode = (state: State): Optional<string> => {
  try {
    return (state as any).form.CheckSecretForm.values.code
  } catch (err) {
    return undefined
  }
}
