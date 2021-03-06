import React, { useMemo, useCallback, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'

const styles = {}

styles.sidebar = {
  float: 'left',
  width: 200,
  padding: 20,
  borderRight: '1px solid #aaa',
  marginRight: 20,
}

class Course extends React.Component {
  render() {
    let { sidebar, main, children, params } = this.props
    let course = COURSES[params.courseId]

    let content
    if (sidebar && main) {
      content = (
        <div>
          <div className="Sidebar" style={styles.sidebar}>
            {sidebar}
          </div>
          <div className="Main" style={{ padding: 20 }}>
            {main}
          </div>
        </div>
      )
    } else if (children) {
      content = children
    } else {
      content = <Dashboard />
    }

    return (
      <div>
        <h2>{course.name}</h2>
        <Nav course={course} />
        {content}
      </div>
    )
  }
}

module.exports = Course
