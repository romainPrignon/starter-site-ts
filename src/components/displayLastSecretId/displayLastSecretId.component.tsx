import { Optional } from '../../../type/utils'

import React from 'react'

const style = {
  marginTop: '20px'
}

type Props = {
  store: {
    lastSecretId: Optional<string>
  }
}

const DisplayLastSecretId = ({ store }: Props) => store.lastSecretId ? (
  <div style={style} className="DisplayLastSecretId">
    <div>Send this code to your friend !</div>
    <div>{store.lastSecretId}</div>
  </div>
) : null

export default DisplayLastSecretId
