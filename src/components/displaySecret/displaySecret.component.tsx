import { Secret } from '../../../type/domain'
import { Optional } from '../../../type/utils'

import React from 'react'

const style = {
  marginTop: '20px'
}

type Props = {
  store: {
    secret: Optional<Secret>
  }
}

const DisplaySecret = ({ store }: Props) => store.secret ? (
  <div style={style} className="DisplaySecret">
    <div>Your secret is :</div>
    <div>{store.secret.content}</div>
  </div>
) : null

export default DisplaySecret
