import React from 'react';
import './App.css';
import SongOverview from './components/SongOverview';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";



function App() {

  return (
    <Router>
        <div className="App">
          <h1 className='App-header'>Memosong – playlister</h1>
          <nav className="nava">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>  
          </nav>
          <Switch>
                    <Route exact path="/"><SongOverview/></Route>
                    <Route exact path="/about"><About/></Route>
              </Switch>
             
        </div>
    </Router>
  );
}

export default App;
