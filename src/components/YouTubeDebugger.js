// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  bitRateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () =>
    console.log(this.state.settings.bitrate)
    )
  }

  resHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, () =>
    console.log(this.state.settings.video.resolution)
    )
  }

  render(){
    return (
      <div>
      <button
        className="bitrate"
        onClick={this.bitRateHandler}>
        CHANGE BIT RATE
      </button>
      <button
        className="resolution"
        onClick={this.resHandler}>
        CHANGE RES
      </button>
      </div>
    )
  }

}
