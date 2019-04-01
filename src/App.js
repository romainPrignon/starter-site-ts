import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import './App.css'

import IndexView from './views/indexView/indexView'
import CheckView from './views/checkView/checkView'
import WhisperView from './views/whisperView/whisperView'

const App = ({ store, history }) => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Route
          path="/"
          component={IndexView}
        />
        <Route
          path="/check"
          component={CheckView}
        />
        <Route
          path="/whisper"
          component={WhisperView}
        />
      </Router>
    </Provider>
  </div>
)

export default App
