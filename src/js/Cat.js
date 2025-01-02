import '../css/Cat.css'
import { useState } from 'react';

const Cat = ({shouldShowDialog}) => {
  const homepage = process.env.PUBLIC_URL || '';   

  const [showDialog, setShowDialog] = useState(false)
  const message = "Click the flame ️‍🔥 to put out the candle"
  

  const handleClick = () =>{
    setShowDialog(!showDialog)
  }
  setTimeout(() => {
    setShowDialog(true)
  }, 5000);

  return (
    <div className="cat-wrap"> 
      <div className='dialog' style={{opacity:showDialog && shouldShowDialog?1:0}}>
        {message}
      </div>
      <div className="cat">
        <img src={`${homepage}/cat.webp`} alt="cat" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Cat;