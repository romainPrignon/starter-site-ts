import React from 'react'

import WhisperSecretForm from '../../forms/whisperSecretForm/whisperSecretForm'
import DisplayLastSecretId from '../../components/displayLastSecretId/displayLastSecretId'

import './whisperView.css'

const WhisperView = () => (
  <div className="WhisperView">
    <WhisperSecretForm />
    <DisplayLastSecretId />
  </div>
)

export default WhisperView
