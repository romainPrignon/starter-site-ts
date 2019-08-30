import React from 'react'

const DEFAULT_LOADER_CHARACTERS = '\\|/—'
const DEFAULT_LOADER_SPEED_MS = 100
const fontFamily = 'Consolas, "Liberation Mono", Courier, monospace'

type Props = {
  characters: string
  speed: number
}
type State = {
  tick: number
}

export class Loader extends React.Component<Props, State> {
  static defaultProps = {
    characters: DEFAULT_LOADER_CHARACTERS,
    speed: DEFAULT_LOADER_SPEED_MS
  }

  private interval: any

  constructor (props: any) {
    super(props)
    this.state = { tick: 0 }
  }

  componentWillMount () {
    this.interval = setInterval(this.nextStep.bind(this), this.props.speed)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  nextStep () {
    this.setState({
      tick: (this.state.tick + 1) % this.props.characters.length
    })
  }

  render () {
    return (
      <span style={{ color: 'black', textAlign: 'center', fontFamily }}>{this.props.characters[this.state.tick]}</span>
    )
  }
}

export default Loader
