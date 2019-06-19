import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux'

import { fetchSecret } from '../../actions/domain.action'
import { State } from '../../../type'

type Props = InjectedFormProps<FormData>

type FormData = {
  code: string
}

type FormError = {
  code?: string
}

/**
 * Sometimes there is no need to separate containers and components
 * Just export the component, and export default the container
 */
export const CheckSecretForm = ({ handleSubmit, pristine, submitting }: Props) => (
  <form onSubmit={handleSubmit}>
    <label>Secret code</label>
    <Field
      name="code"
      component="input"
      type="text"
    />
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
  </form>
)

const reduxFormOptions = {
  form: 'CheckSecretForm',
  validate: (values: FormData): FormError => {
    const errors: FormError = {}

    if (!values.code) {
      errors.code = 'Please, give me a secret code !'
    }

    return errors
  }
}

const mapDispatchToProps = (dispach: ThunkDispatch<State, {}, AnyAction>) => ({
  onSubmit: (values: FormData) => dispach(fetchSecret(values.code))
})

export default connect(null, mapDispatchToProps)(reduxForm(reduxFormOptions)(CheckSecretForm))
