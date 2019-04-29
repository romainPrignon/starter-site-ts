import { connect } from 'react-redux'

import { getLastSecretId } from '../../selectors/secret.selector'

import DisplayLastSecretId from './displayLastSecretId.component'

const mapStateToProps = (state) => ({
  store: {
    lastSecretId: getLastSecretId(state)
  }
})

export default connect(
  mapStateToProps
)(DisplayLastSecretId)