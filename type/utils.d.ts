import { Action as ReduxAction } from 'redux'
import { ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk'
import { State } from '../type'

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

export type ThunkDispatch = ReduxThunkDispatch<State, any, ReduxAction>
