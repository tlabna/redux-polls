import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    return <div>{'Starter Code.'}</div>
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  polls: state.polls,
  authedUser: state.authedUser,
})

export default connect(mapStateToProps)(App)
