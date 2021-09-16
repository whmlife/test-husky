import React from 'react'
import PropTypes from 'prop-types'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends React.Component {
  static propTypes = {
    actions: PropTypes.object
  }
  render() {
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>{this.props.children || <Dashboard courses={COURSES} />}</div>
      </div>
    )
  }
}

module.exports = App
