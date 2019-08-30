import withDataFetching from '../../hoc/withDataFetching'
import * as domainAction from '../../actions/domain.action'
import * as secretSelector from '../../selectors/secret.selector'
import Check from './check.component'

export default withDataFetching(Check, {
  fetch: domainAction.fetchSecrets,
  error: secretSelector.isFetchSecretsError,
  loading: secretSelector.isFetchSecretsLoading,
  data: secretSelector.getSecrets
})
