// Code YouTubeDebugger Component Here

import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor(){
    super()

    this.state={
       errors: [],
       user: null,
       settings: {
            bitrate: 8,
            video: {
               resolution: '1080p'
              }
            }
         }

    this.clickHandler= ()=> {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }

      })
    }

    this.handleClick= ()=> {
      this.setState({
        settings: {
            bitrate: 8,
            video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
      })
    }


  }


  render(){

    return(
      <div>
      <button className="bitrate" onClick={this.clickHandler}> Change Bitrate </button>
      <button className="resolution" onClick={this.handleClick}> Change Resolution </button>
      </div>
    )
  }




}
