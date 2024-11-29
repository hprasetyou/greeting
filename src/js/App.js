import React, { useState } from 'react';
import BirthdayCard from './BirthdayCard';
import Cake from './Cake';
import Background from './Background';

import '../css/App.css';

function App() {
  const [burnCandle, setBurnCandle] = useState(true);
  const [sprinkleRain, setSprinkleRain] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleBurnCandle = (value) => {
    if(burnCandle){
      setTimeout(() => {
        setShowCard(true)
      }, 800);
      setBurnCandle(false);
    }
    setSprinkleRain(true); 
  };

  const message = "Wishing you joy, love, and happiness on your special day. May this year bring you wonderful moments and all the success you deserve!";
  return (
    <div className="App">
      <div className="container">
        <Background sprinkleRain={sprinkleRain}/>
        <BirthdayCard name="John" message={message} showCard={showCard} setShowCard={setShowCard} />
        <Cake burnCandle={burnCandle} setBurnCandle={handleBurnCandle}/>
      </div>
    </div>
  );
}

export default App;
