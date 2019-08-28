import { State } from '../../../type'

import { connect } from 'react-redux'
import { getSecretById } from '../../selectors/secret.selector'
import { getCode } from '../../selectors/form.selector'
import DisplaySecret from './displaySecret.component'

const mapStateToProps = (state: State) => {
  const code = getCode(state) || ''
  return {
    store: {
      secret: getSecretById(state, code)
    }
  }
}

export default connect(
  mapStateToProps
)(DisplaySecret)
