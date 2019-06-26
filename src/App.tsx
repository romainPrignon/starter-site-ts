import { History } from 'history'
import { Theme } from '@material-ui/core'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { Store } from 'redux'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import Index from './views/index/index.container'
import Login from './views/login/login.container'
// import AuthRoute from './application/auth'

import './App.css'

type Props = {
  store: Store,
  history: History
  theme: Theme
}

// const App = ({ store, history, theme }: Props) => (
//   <div className="App">
//     <Provider store={store}>
//       <Router history={history}>
//         <ThemeProvider theme={theme}>
//           <AuthRoute exact path="/" component={Index} />
//           <Route path="/login" component={Login} />
//         </ThemeProvider>
//       </Router>
//     </Provider>
//   </div>
// )

const App = ({ store, history, theme }: Props) => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
        </ThemeProvider>
      </Router>
    </Provider>
  </div>
)

export default App
