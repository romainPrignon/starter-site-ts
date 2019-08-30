import React from 'react'

import CheckSecretForm from '../../components/checkSecretForm/checkSecretForm.container'
import DisplaySecret from '../../components/displaySecret/displaySecret.container'

import './check.css'

/**
 * There is two possibility:
 * <DisplaySecret secretId={id} />
 * We use a statefull component to store secretId from <CheckSecretForm /> when user type it
 * We use a selector from form.selector to retreive the secretId
 */
const Check = () => {
  return (
    <div className="Check">
      <CheckSecretForm />
      <DisplaySecret />
    </div>
  )
}

export default Check
