import React, {Component} from 'react'

export default class DigitalClicker extends Component{
  constructor(){
    super()
    this.state= {
      timesClicked: 0
    }
  }

  render(){
    return(
      <div>
      <button onClick={()=>{
        let num = this.state.timesClicked + 1
        this.setState({timesClicked: num})}}>{this.state.timesClicked}</button>
      </div>
    )
  }

}
