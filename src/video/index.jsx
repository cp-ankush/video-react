import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Controls from './controls.jsx'
import './styles.css'

const VideoPlayer = ({ src, type }) => {
  const inputEl = useRef(null);
  return (
    <div className="video-container">
      <video width="50%" height="50%" ref={inputEl}>
        <source
          src={src}
          type={type}
          />
      </video>
      <Controls videoRef={inputEl} />
    </div>
  )
}

export default VideoPlayer
