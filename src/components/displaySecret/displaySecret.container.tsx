import { State } from '../../../type'

import React from 'react'
import { connect } from 'react-redux'
import { getSecretById } from '../../selectors/secret.selector'
import DisplaySecret from './displaySecret.component'

const mapStateToProps = (state: State) => {
  // TODO: make a selector
  const secretId = state.form.CheckSecretForm
    && state.form.CheckSecretForm.values // eslint-disable-line
    && state.form.CheckSecretForm.values.code // eslint-disable-line
    || undefined // eslint-disable-line

  return {
    store: {
      secret: getSecretById(state, secretId)
    },
    props: {
      data: secretId ? state.domain.secrets.data[secretId].data : false,
      pending: secretId ? state.domain.secrets.data[secretId].pending : false,
      error: secretId ? state.domain.secrets.data[secretId].error : undefined
    }
  }
}

export default connect(
  mapStateToProps
)(({ props, store }: any) => {
  if (props.error) throw props.error
  if (props.pending) return <div>Loading...</div>
  if (props.data) return <DisplaySecret store={store} />

  return null
})
