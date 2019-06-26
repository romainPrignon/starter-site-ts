import React from 'react'
import { Route, Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Check from './check/check.container'
import Whisper from './whisper/whisper.container'

const Layout = () => (
  <div>
    <Drawer open variant="persistent" anchor="left">
      <Button variant="contained" color="primary">
        <Link to="/whisper">Send</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/check">Check</Link>
      </Button>
    </Drawer>
    <div>
      <Route
        path="/check"
        component={Check}
      />
      <Route
        path="/whisper"
        component={Whisper}
      />
    </div>
  </div>
)

export default Layout
