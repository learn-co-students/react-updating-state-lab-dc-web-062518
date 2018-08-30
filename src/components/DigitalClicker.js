import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor () {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  addOne = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render() {
    return (
      <button onClick={this.addOne}>{this.state.timesClicked}</button>
    )
  }
}
