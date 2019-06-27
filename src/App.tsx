import { History } from 'history'
import { Theme } from '@material-ui/core'

import React from 'react'
import { Provider } from 'react-redux'
import { Router as RouterProvider, Route, Switch } from 'react-router-dom'
import { Store } from 'redux'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import AuthRoute from './application/auth'
import Login from './views/login/login.container'
import Layout from './views/Layout'

import './App.css'

type Props = {
  store: Store,
  history: History
  theme: Theme
}

const App = ({ store, history, theme }: Props) => (
  <div className="App">
    <Provider store={store}>
      <RouterProvider history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthRoute path="/" component={Layout} />
          </Switch>
        </ThemeProvider>
      </RouterProvider>
    </Provider>
  </div>
)

export default App
