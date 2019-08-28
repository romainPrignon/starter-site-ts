import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'

export type FormError = {
  email?: string
  password?: string
}

export type FormData = {
  email: string
  password: string
}

type Props = InjectedFormProps<FormData>

const Login = ({ handleSubmit, pristine, submitting }: Props) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <Field
          name="email"
          component="input"
          type="text"
        />
        <label>password</label>
        <Field
          name="password"
          component="input"
          type="text"
        />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Login
