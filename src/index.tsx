import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './application/registerServiceWorker'
import createHistory from './application/history'
import createStore from './application/store'
import createTheme from './application/theme'

const history = createHistory()
const store = createStore(history)()
const theme = createTheme()

ReactDOM.render(
  <App store={store} history={history} theme={theme} />,
  document.getElementById('root')
)
registerServiceWorker()
