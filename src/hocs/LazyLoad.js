/*
 * @see https://github.com/ZhuGongpu/CodeSnippets/issues/86
 */

import React from 'react'

class LazyLoad extends React.Component {
  constructor(props) {
    super(props)

    this.state = { component: null }
  }

  componentWillMount() {
    this.loadComponent(this.props.load)
  }

  componentWillReceiveProps({ load: nextLoad }) {
    if (nextLoad !== this.props.load) {
      this.loadComponent(nextLoad)
    }
  }

  loadComponent(load) {
    this.setState({ component: null })

    load().then(component =>
      this.setState({
        // handle both ES6 imports and CommonJS
        component: component.default ? component.default : component,
      })
    )
  }

  render() {
    const { component: Component } = this.state

    return Component ? <Component {...this.props} /> : null
  }
}

export default LazyLoad
