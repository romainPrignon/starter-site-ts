import {connect} from 'react-redux'

import {getLastSecretId} from '../../selectors/secrets'

import DisplayLastSecretId from './displayLastSecretId.jsx'

const mapStateToProps = (state) => ({
  store: {
    lastSecretId: getLastSecretId(state)
  }
})

export default connect(
  mapStateToProps
)(DisplayLastSecretId)
