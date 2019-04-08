import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import './App.css'

import Index from './views/index/index.container'
import Check from './views/check/check.container'
import Whisper from './views/whisper/whisper.container'

const App = ({ store, history }) => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Route
          path="/"
          component={Index}
        />
        <Route
          path="/check"
          component={Check}
        />
        <Route
          path="/whisper"
          component={Whisper}
        />
      </Router>
    </Provider>
  </div>
)

export default App
