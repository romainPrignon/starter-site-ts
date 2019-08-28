import { ThunkDispatch } from '../../../type/utils'

import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Login, { FormData, FormError } from './login.component'
import * as authAction from '../../actions/auth.action'

const reduxFormOptions = {
  form: 'LoginForm',
  validate: (values: FormData): FormError => {
    const errors: FormError = {}

    if (!values.email) {
      errors.email = 'required'
    }

    if (!values.password) {
      errors.password = 'required'
    }

    return errors
  }
}

const mapDispatchToProps = (dispach: ThunkDispatch) => ({
  onSubmit: (values: FormData) => dispach(authAction.login({ email: values.email, password: values.password }))
})

export default connect(
  null,
  mapDispatchToProps
)(reduxForm(reduxFormOptions)(Login))
