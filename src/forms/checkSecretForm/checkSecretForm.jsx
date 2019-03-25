import React from 'react'
// import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { fetchSecret } from '../../actions/domainAction'

const CheckSecretForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <label>Secret code</label>
    {/* <Field
      name="code"
      component="input"
      type="text"
    /> */}
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
  </form>
)

// const reduxFormOptions = {
//   form: 'CheckSecretForm',
//   validate: (values) => {
//     const errors = {}

//     if (!values.code) {
//       errors.code = 'Please, give me a secret code !'
//     }

//     return errors
//   }
// }

const mapDispatchToProps = (dispach) => ({
  onSubmit: (values) => dispach(fetchSecret(values.code))
})

// export default connect(null, mapDispatchToProps)(reduxForm(reduxFormOptions)(CheckSecretForm))
export default connect(null, mapDispatchToProps)(CheckSecretForm)
