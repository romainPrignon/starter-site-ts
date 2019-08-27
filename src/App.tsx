import { History } from 'history'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { Store } from 'redux'
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router'

import './App.css'

import AuthRoute from './application/auth'
import Layout from './views/layout'
import Login from './views/login/login.container'

type Props = {
  store: Store,
  history: History
}

const App = ({ store, history }: Props) => (
  <div className="App">
    <Provider store={store}>
      <ConnectedRouterProvider history={history}>
        <Router history={history}>
          <Route path="/login" component={Login} />
          <AuthRoute path="/" component={Layout} />
        </Router>
      </ConnectedRouterProvider>
    </Provider>
  </div>
)

export default App
