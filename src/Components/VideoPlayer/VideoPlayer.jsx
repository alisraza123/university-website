import React, { useState } from 'react'
import './videoplayer.css'
import video from '../../assets/video.mp4'
const VideoPlayer = ({playState,setPlayState}) => {
    const [show,setShow]=useState();
    const handleClick=()=>{
      if(show) setShow(false)
        else setShow(true)
      if(playState) setPlayState(false)
        else setPlayState(true)
    }
  return (
    <div className={`videoPlayer ${playState?'':'hide'}`} onClick={handleClick}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer