import React from 'react'
// import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { addSecret } from '../../actions/domain.action'

const WhisperSecretForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <label>Content</label>
    {/* <Field
      name="content"
      component="input"
      type="text"
    /> */}
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
  </form>
)

// const reduxFormOptions = {
//   form: 'WhisperSecretForm',
//   validate: (values) => {
//     const errors = {}

//     if (!values.content) {
//       errors.code = 'You have to write something'
//     }

//     return errors
//   }
// }

const mapDispatchToProps = (dispach) => ({
  onSubmit: (values) => dispach(addSecret({ secret: { content: values.content } }))
})

// export default connect(null, mapDispatchToProps)(reduxForm(reduxFormOptions)(WhisperSecretForm))
export default connect(null, mapDispatchToProps)(WhisperSecretForm)
