import '../css/Cat.css'
import { useState } from 'react';

const Cat = () => {
  const homepage = process.env.PUBLIC_URL || '';   

  const [showDialog, setShowDialog] = useState(false)
  const message = "Click the flame ️‍🔥 to put out the candle"
  

  const handleClick = () =>{
    setShowDialog(!showDialog)
  }
  setTimeout(() => {
    let initialized = window.localStorage.getItem('initialized')
    initialized = parseInt(initialized?initialized:0)
    if(initialized < 2){
      setShowDialog(true)
    }
    window.localStorage.setItem('initialized',initialized+1)
  }, 3000);

  return (
    <div className="cat-wrap"> 
      <div className='dialog' style={{opacity:showDialog?1:0}}>
        {message}
      </div>
      <div className="cat">
        <img src={`${homepage}/cat.webp`} alt="cat" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Cat;