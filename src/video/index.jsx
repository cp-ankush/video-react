import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const VideoPlayer = ({ src, type, children }) => {
  const inputEl = useRef(null);
  return (
    <div className="video-container">
      <video width="35%" height="49%" ref={inputEl}>
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
