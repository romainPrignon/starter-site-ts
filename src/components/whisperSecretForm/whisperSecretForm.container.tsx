import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { State } from '../../../type'

import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { addSecret } from '../../actions/domain.action'

type Props = InjectedFormProps<FormData>

type FormData = {
  content: string
}

type FormError = {
  content?: string
}

// components/TextField
const renderTextField = ({ input }: {input: {}}) => {
  return (
    <TextField {...input} />
  )
}

/**
 * Sometimes there is no need to separate containers and components
 * Just export the component, and export default the container
 */
export const WhisperSecretForm = ({ handleSubmit, pristine, submitting }: Props) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="content"
      component={renderTextField}
      label="content"
    />
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
  </form>
)

const reduxFormOptions = {
  form: 'WhisperSecretForm',
  validate: (values: FormData) => {
    const errors: FormError = {}

    if (!values.content) {
      errors.content = 'You have to write something'
    }

    return errors
  }
}

// todo abstract ThunkDispatch<State, {}, AnyAction>
const mapDispatchToProps = (dispach: ThunkDispatch<State, {}, AnyAction>) => ({
  onSubmit: (values: FormData) => dispach(addSecret({ content: values.content }))
})

export default connect(null, mapDispatchToProps)(reduxForm(reduxFormOptions)(WhisperSecretForm))
