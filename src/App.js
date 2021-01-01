import React,{useState}  from 'react';
import './App.css';

import Game from './Game'


function App() {

  
  
  const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
  }
  
  // Color Theme

  
  // Math science
  

  return (
    <StarMatch />
  );
}

export default App;
