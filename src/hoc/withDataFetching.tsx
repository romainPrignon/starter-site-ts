import { State } from '../../type'
import { ThunkDispatch } from '../../type/utils'

import React from 'react'
import { connect, Selector } from 'react-redux'
import Loader from '../components/loader/loader.container'

type Props = {
  error: boolean,
  loading: boolean,
  data: unknown,
  dispatch: ThunkDispatch
}

type DataFetchLifeCycle = {
  fetch: Function,
  error: Selector<State, boolean>
  loading: Selector<State, boolean>,
  data: Selector<State, unknown>
}

const withDataFetching = (Component: React.ComponentType<unknown>, lifecycle: DataFetchLifeCycle) => {
  let hasFetch = false
  const mapStateToProps = (state: State) => {
    return {
      error: lifecycle.error(state),
      loading: lifecycle.loading(state),
      data: lifecycle.data(state)
    }
  }

  const WithDataFetching = ({ error, loading, data, dispatch, ...props }: Props) => {
    if (!hasFetch) {
      dispatch(lifecycle.fetch())
      hasFetch = true
    }

    if (error) throw error
    if (loading) return <Loader {...props} />
    if (data) return <Component {...props} />

    return <Loader {...props} />
  }

  return connect(mapStateToProps)(WithDataFetching)
}

export default withDataFetching
