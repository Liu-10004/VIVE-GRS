import React from 'react'

class Countdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: props.duration,
    }
  }

  componentDidMount() {
    const { onTimeout } = this.props

    this.timer = setInterval(() => {
      const { duration } = this.state

      if (duration > 0) {
        this.setState({ duration: duration - 1 })
      } else {
        clearInterval(this.timer)

        onTimeout()
      }
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer)
  }

  render() {
    const { duration } = this.state

    return <span>{`${duration}s`}</span>
  }
}

export default Countdown
