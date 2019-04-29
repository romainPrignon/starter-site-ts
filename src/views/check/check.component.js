import React from 'react'

import CheckSecretForm from '../../components/checkSecretForm/checkSecretForm.container'
import DisplaySecret from '../../components/displaySecret/displaySecret.container'

import './check.css'

const Check = () => (
  <div className="Check">
    <CheckSecretForm />
    <DisplaySecret />
  </div>
)

export default Check
