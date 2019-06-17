import { History } from 'history'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { Store } from 'redux'

import './App.css'

import Index from './views/index/index.container'
import Check from './views/check/check.container'
import Whisper from './views/whisper/whisper.container'

type Props = {
  store: Store,
  history: History
}

const App = ({ store, history }: Props) => (
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
