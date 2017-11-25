import React from 'react'

const style = {
  marginTop: '20px'
}

const DisplaySecret = ({store}) => store.secret ? (
  <div style={style} className="DisplayLastSecretId">
    <div>Your secret is :</div>
    <div>{store.secret.content}</div>
  </div>
) : null

export default DisplaySecret
