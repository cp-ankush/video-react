import React from 'react';
import './App.css';
import VideoPlayer from './video'

function App() {
  return (
    <div className="App">
      <VideoPlayer
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      >
        <div className="overlay">
          <span className="top-gap" >Overlay Content</span>
          <img src={'https://dummyimage.com/qvga'} width="50px" height="50px" className="top-gap" />
          <button className="top-gap">Button</button>
        </div>
      </VideoPlayer>
    </div>
  );
}

export default App;
