import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './index.css'

import IndexView from './views/indexView/indexView'
import CheckView from './views/checkView/checkView'
import WhisperView from './views/whisperView/whisperView'

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <div className="App">
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
      </div>
    </Router>
  </Provider>
)

export default App
