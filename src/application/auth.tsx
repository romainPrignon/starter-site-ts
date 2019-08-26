import { State } from '../types'

import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'
import * as authSelector from '../selectors/auth.selector'

type Props = {
  isAuth: boolean
} & RouteProps

const AuthRoute = ({ component: Component, isAuth, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => {
        return isAuth && Component ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}

const mapStateToProps = (state: State) => {
  return {
    isAuth: authSelector.isAuth(state)
  }
}

export default connect(mapStateToProps)(AuthRoute)
