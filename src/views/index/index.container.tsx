import { State } from '../../../type'

import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Component from './index.component'

type Props = {
  isAuth: boolean
}

const Index = ({ isAuth }: Props) => {
  console.log(isAuth)
  return isAuth
    ? <Component />
    : <Redirect to="/login" />
}

const mapStateToProps = (state: State) => {
  return {
    isAuth: state.auth.user
  }
}

export default connect(mapStateToProps)(Index)
