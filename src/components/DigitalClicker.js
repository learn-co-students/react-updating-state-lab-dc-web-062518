// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    let clickedTimes = this.state.timesClicked
    this.setState({
      timesClicked: clickedTimes + 1
    }, () =>
    console.log(this.state.timesClicked)
    )
  }

  render(){
    return(
      <button
        onClick={this.clickHandler}>
        {this.state.timesClicked}
      </button>
    )
  }
}
