import { Action as ReduxAction } from 'redux'

export type Fetchable<T> = {
  data: T
  loading: boolean
  error: Optional<Error>
}

export type Optional<T> = T | undefined | null

export type Action = ReduxAction & {
  payload: any | Error
  meta?: any
}
