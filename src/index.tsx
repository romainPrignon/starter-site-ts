import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory() // move to application/history.js
const store = configureStore(history)()

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
)
registerServiceWorker()
