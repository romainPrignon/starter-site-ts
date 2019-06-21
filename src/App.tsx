import { History } from 'history'
import { Theme } from '@material-ui/core'

import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { Store } from 'redux'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
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
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </Router>
    </Provider>
  </div>
)

export default App
