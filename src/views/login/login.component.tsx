import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { State } from '../../../type'

import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../../actions/auth.action'

import './login.css'

type Props = InjectedFormProps<FormData>

type FormData = {
  login: string
  mdp: string
}

type FormError = {
  login?: string
  mdp?: string
}

const Login = ({ handleSubmit, pristine, submitting }: Props) => (
  <div className="Login">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Login</label>
        <Field
          name="login"
          component="input"
          type="text"
        />
      </div>
      <div>
        <label>mdp</label>
        <Field
          name="mdp"
          component="input"
          type="password"
        />
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  </div>
)

const reduxFormOptions = {
  form: 'LoginForm',
  validate: (values: FormData): FormError => {
    const errors: FormError = {}

    if (!values.login) {
      errors.login = 'required'
    }

    if (!values.mdp) {
      errors.mdp = 'required'
    }

    return errors
  }
}

const mapDispatchToProps = (dispach: ThunkDispatch<State, {}, AnyAction>) => ({
  onSubmit: (values: FormData) => dispach(login({ login: values.login, mdp: values.mdp }))
})

export default connect(null, mapDispatchToProps)(reduxForm(reduxFormOptions)(Login))
