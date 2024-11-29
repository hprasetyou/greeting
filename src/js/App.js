import React, { useState } from 'react';
import BirthdayCard from './BirthdayCard';
import Cake from './Cake';
import Background from './Background';

import '../css/App.css';

function App() {
  const [burnCandle, setBurnCandle] = useState(true);
  const [sprinkleRain, setSprinkleRain] = useState(false);

  const handleBurnCandle = (value) => {
    setBurnCandle(false);
    setSprinkleRain(true); // Set isActive to true when burnCandle is false
  };

  const message = "Wishing you joy, love, and happiness on your special day. May this year bring you wonderful moments and all the success you deserve!";
  return (
    <div className="App">
      <div className="container">
        <Background sprinkleRain={sprinkleRain}/>
        <BirthdayCard name="John" message={message} />
        <Cake burnCandle={burnCandle} setBurnCandle={handleBurnCandle}/>
      </div>
    </div>
  );
}

export default App;
