import React from 'react'

type Props = {}

type State = {
  error: Error | undefined
}

const Error = ({ msg }: any) => {
  return (
    <section>
      <h1 style={{ color: 'black', textAlign: 'center' }}>:(</h1>
      {msg}
    </section>
  )
}

class ErrorHandler extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      error: undefined
    }
  }

  // do not work with SSR yet
  componentDidCatch (error: Error) {
    this.setState({ error })
  }

  render () {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      return <Error msg={error.message} />
    }

    return children
  }
}

export default ErrorHandler
