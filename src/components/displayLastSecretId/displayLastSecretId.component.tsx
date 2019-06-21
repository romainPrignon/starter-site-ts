import React from 'react'

const style = {
  marginTop: '20px'
}

type Props = {
  store: {
    lastSecretId: string
  }
}

const DisplayLastSecretId = ({ store }: Props) => store.lastSecretId ? (
  <div style={style} className="DisplayLastSecretId">
    <div>{store.lastSecretId}</div>
  </div>
) : null

export default DisplayLastSecretId
