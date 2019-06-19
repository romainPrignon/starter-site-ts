import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './application/registerServiceWorker'
import createHistory from './application/history'
import createStore from './application/store'

const history = createHistory()
const store = createStore(history)()

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
)
registerServiceWorker()
