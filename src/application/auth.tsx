import { State } from '../../type'

import React from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuth } from '../selectors/auth.selector'

type Props = {
  isAuth: boolean
} & RouteProps

const AuthRoute = ({ component: Component, isAuth, ...rest }: Props) => {
  return <Route {...rest} render={(props: RouteComponentProps) => {
    return isAuth
      ? Component && <Component {...props} />
      : <Redirect to="/login" />
  }} />
}

const mapStateToProps = (state: State) => {
  return {
    isAuth: isAuth(state)
  }
}

export default connect(mapStateToProps)(AuthRoute)
