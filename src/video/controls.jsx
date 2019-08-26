// import React, {useState} from 'react'
// import PropTypes from 'prop-types'
// import './styles.css'
//
// const handleClick = ({playVideo, videoRef, setVideoPlay}) => {
//   switch(playVideo) {
//     case false:
//       videoRef.current.play()
//       setVideoPlay(true)
//       break
//     case true:
//       setVideoPlay(false)
//       videoRef.current.pause()
//       break
//   }
// }
//
// const Controls = ({ videoRef }) => {
//   const [playVideo, setVideoPlay] = useState(false)
//   const icon = playVideo? 'play_circle_filled' : 'pause'
//   return (
//     <div className="controls-container">
//       {
//         <i
//           className="material-icons"
//           onClick={() => {
//             handleClick({playVideo, videoRef, setVideoPlay})
//           }}>
//           {icon}
//         </i>
//       }
//     </div>
//   )
// }
//
// export default Controls
