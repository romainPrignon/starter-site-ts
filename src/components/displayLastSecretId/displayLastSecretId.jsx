import React from 'react'

const style = {
  marginTop: '20px'
}

const DisplayLastSecretId = ({store}) => store.lastSecretId && (
  <div style={style} className="DisplayLastSecretId">
    <div>Send this code to your friend !</div>
    <div>{store.lastSecretId}</div>
  </div>
)

export default DisplayLastSecretId
