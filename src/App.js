import {useState} from 'react';
import './App.css';

const App = () => {

  const min = 0;
  const max = 100;
  const [num, setNum] = useState(0);
  
  // get number between min  and max 
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
  // setting the handleClick 
  const handleClick = () => {
    setNum(randomNumber(min, max));
  };

  return (
    <div>
      <h2>Number is: {num}</h2>
      <button onClick={handleClick}>Generate a random number</button>
    </div>
  );
};

export default App;
