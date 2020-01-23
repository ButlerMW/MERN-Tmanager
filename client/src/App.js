import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import AddPlayer from './views/AddPlayer';
import Status from './views/Status';
import { Link, Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Link to={"/players/list"}>Manage Players</Link>
      <Link to={"/status/game/1"}>Manage Player Status</Link>
      <Router>
        <Main path="/players/list" />
        <AddPlayer path="/players/addplayer" />
        <Status path="/status/game/:gameId" />
      </Router>
    </div>
  );
}

export default App;
