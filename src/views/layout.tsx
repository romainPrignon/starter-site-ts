import React from 'react'
import { Route } from 'react-router-dom'

import Index from './index/index.container'
import Check from './check/check.container'
import Whisper from './whisper/whisper.container'

const Layout = () => {
  return (
    <main>
      <Route path="/" component={Index} />
      <Route path="/check" component={Check} />
      <Route path="/whisper" component={Whisper} />
    </main>
  )
}

export default Layout
