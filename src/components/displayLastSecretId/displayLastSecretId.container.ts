import { State } from '../../../type'

import { connect } from 'react-redux'
import { getLastSecretId } from '../../selectors/secret.selector'
import DisplayLastSecretId from './displayLastSecretId.component'

const mapStateToProps = (state: State) => ({
  store: {
    lastSecretId: getLastSecretId(state)
  }
})

export default connect(
  mapStateToProps
)(DisplayLastSecretId)
