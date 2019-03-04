import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
)
registerServiceWorker()
