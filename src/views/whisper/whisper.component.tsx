import React from 'react'

import WhisperSecretForm from '../../components/whisperSecretForm/whisperSecretForm.container'
import DisplayLastSecretId from '../../components/displayLastSecretId/displayLastSecretId.container'

import './whisper.css'

const Whisper = () => (
  <div className="Whisper">
    <WhisperSecretForm />
    <DisplayLastSecretId />
  </div>
)

export default Whisper
