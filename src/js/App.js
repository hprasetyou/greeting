import React, { useState } from 'react';
import BirthdayCard from './BirthdayCard';
import Cake from './Cake';
import Background from './Background';

import '../css/App.css';

function App() {
  const [burnCandle, setBurnCandle] = useState(true);
  const [sprinkleRain, setSprinkleRain] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const homepage = process.env.PUBLIC_URL || ''; 

  const handleBurnCandle = (value) => {
    if(burnCandle){
      setTimeout(() => {
        setShowCard(true)
      }, 800);
      setBurnCandle(false);
    }
    setSprinkleRain(true); 
  };

  const getRecipient = function(){
    try {
      const params = new URLSearchParams(window.location.search).get('r');
      if(!params){
        return params
      }
      const rAtob = window.atob(params)
      const rArr = rAtob.split('|')
      return {
        name: rArr[0],
        date: rArr[1]
      }
    } catch (error) {
      return null
    }
  }

  const recipient = getRecipient()
  
  if(recipient == null){
    document.title = 'My Page Title';
    return (<div></div>)
  }
  const recipientName = recipient.name
  const targetDate = recipient.date
  
  document.title = `Happy birthday ${recipientName}`

  const message = "Wishing you joy, love, and happiness on your special day. May your special day be as wonderful and amazing as you are. Here's to another year of happiness, health, and prosperity. \n May all your dreams come true and each moment be cherished.";
  return (
    <div className="App">
      <div className="container">
        <Background sprinkleRain={sprinkleRain} targetDate={targetDate}/>
        
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
