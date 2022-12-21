import React from 'react';
import './App.css';
import SongOverview from './components/SongOverview';



function App() {

  return (
    <div className="App">
      <h1>Memosong – playlister</h1>
      <h2>Type in your song and click the add button to queue song to list below</h2>
      <SongOverview />   
    </div>
  );
}

export default App;
