import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/nshyjApIovo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBp3ie7MpN4nFtX0AFdqDbbeCmo6w" alt="" />
        <span>05:22</span>
      </div>

      <div className="video__channel">
        <img src="https://i.ytimg.com/vi/nshyjApIovo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBp3ie7MpN4nFtX0AFdqDbbeCmo6w" alt="" />
        <p>Channel Name</p>

      </div>
      <div className="video__text">
        <h3>Video Title</h3>
        <p>Video description</p>

      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span> 
      </div>

      <div className='video__channel'>
        <img src="https://i.ytimg.com/vi/nshyjApIovo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBp3ie7MpN4nFtX0AFdqDbbeCmo6w" alt="" />
        <p>Channel Name</p>
      </div>
    </div>
  )
}

export default Video