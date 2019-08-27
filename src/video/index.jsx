import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const VideoPlayer = ({ src, type, children }) => {
  return (
    <div className="video-container">
      <video width="35%" height="49%" controls autoPlay>
        <source
          src={src}
          type={type}
          />
      </video>
      { children }
    </div>
  )
}

export default VideoPlayer
