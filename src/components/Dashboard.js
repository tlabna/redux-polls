import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Dashboard extends Component {
  static propTypes = {
    answered: PropTypes.array.isRequired,
    unanswered: PropTypes.array.isRequired,
  }

  state = {
    showAnswered: false,
  }

  showAnswered = () => {
    this.setState({
      showAnswered: true,
    })
  }

  showUnanswered = () => {
    this.setState({
      showAnswered: false,
    })
  }

  render() {
    const { showAnswered } = this.state
    const { answered, unanswered } = this.props

    const list = showAnswered === true ? answered : unanswered

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={{
              textDecoration: showAnswered === false ? 'underline' : null,
            }}
            onClick={this.showUnanswered}>
            {'Unanswered'}
          </button>
          <span>{' | '}</span>
          <button
            style={{
              textDecoration: showAnswered === true ? 'underline' : null,
            }}
            onClick={this.showAnswered}>
            {'Answered'}
          </button>
        </div>
        <ul className="dashboard-list">
          {list.map((poll) => <li key={poll.id}>{poll.question}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, polls, users }) {
  const answers = users[authedUser].answers

  const answered = answers
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp)

  return {
    answered,
    unanswered,
  }
}

export default connect(mapStateToProps)(Dashboard)
