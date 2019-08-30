import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Index from './index/index.container'
import Check from './check/check.container'
import Whisper from './whisper/whisper.container'
import NotFound from './notFound/notFound.container'

const Layout = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/check" component={Check} />
        <Route path="/whisper" component={Whisper} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default Layout
