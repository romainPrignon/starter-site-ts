import { State } from '../../type'

import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { connect } from 'react-redux'

type Props = {
  isAuth: boolean
} & RouteProps

const AuthRoute = ({ component: Component, ...rest }: Props) => {
  console.log('authroute')
  return <Route {...rest} render={(props: any) => {
    console.log('render')
    console.log('props', props)
    console.log('rest', rest)
    return rest.isAuth
      ? Component && <Component {...props} />
      : <Redirect to="/login" />
  }} />
}

const mapStateToProps = (state: State) => {
  return {
    isAuth: state.auth.user
  }
}

export default connect(mapStateToProps)(AuthRoute)
