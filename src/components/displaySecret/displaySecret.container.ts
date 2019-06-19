import { State } from '../../../type'

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
    }
  }
}

export default connect(
  mapStateToProps
)(DisplaySecret)
