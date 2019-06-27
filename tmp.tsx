const App = ({ store, history, theme }: Props) => (
  <div className="App">
    <Provider store={store}>
      <RouterProvider history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Layout} />
          </Switch>
        </ThemeProvider>
      </RouterProvider>
    </Provider>
  </div>
)

const Layout = ({ isAuth }: any) => {
  return isAuth
    ? (
      <div>
        <Drawer open variant="persistent" anchor="left">
          <Button variant="contained" color="primary">
            <Link to="/whisper">Send</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/check">Check</Link>
          </Button>
        </Drawer>
        <div>
          <Route
            path="/check"
            component={Check}
          />
          <Route
            path="/whisper"
            component={Whisper}
          />
        </div>
      </div>
    )
    : <Redirect to="/login" />
}

const mapStateToProps = (state: State) => {
  console.log('state', state)
  return {
    isAuth: state.auth.user
  }
}

export default connect(mapStateToProps)(Layout)
