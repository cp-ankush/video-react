import React from 'react';
import './App.css';
import VideoPlayer from './video'

function App() {
  return (
    <div className="App">
      <VideoPlayer
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
        />
    </div>
  );
}

export default App;
