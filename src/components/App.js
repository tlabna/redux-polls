import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props

    return (
      <div>
        <LoadingBar />
        {!loading && (
          <Poll match={{ params: { id: 'xj352vofupe1dqz9emx13r' } }} />
        )}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
