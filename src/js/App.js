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

  const recipientName = process.env.REACT_APP_RECIPIENT_NAME || "John Doe";
  const homepage = process.env.PUBLIC_URL || '';    

  const message = "Wishing you joy, love, and happiness on your special day. May your special day be as wonderful and amazing as you are. Here's to another year of happiness, health, and prosperity. \n May all your dreams come true and each moment be cherished.";
  return (
    <div className="App">
      <div className="container">
        <Background sprinkleRain={sprinkleRain}/>
        
        <div className="table">
          <BirthdayCard name={recipientName} message={message} showCard={showCard} setShowCard={setShowCard} />
          <Cake burnCandle={burnCandle} setBurnCandle={handleBurnCandle}/>
          <img src={`${homepage}/table.webp`} alt="table" className="table-image" />  
        </div>
      </div>
    </div>
  );
}

export default App;
