import '../css/Cake.css';

const Cake = ({ burnCandle, setBurnCandle }) => {
  const homepage = process.env.PUBLIC_URL || '';
  const handleClick = () => {
    setBurnCandle(false);
    var audio = new Audio(`${homepage}/trumpet.wav`);
    audio.play();
  };
  return (
    <div className="cake">
      <img onClick={handleClick} src={`${homepage}/flame.webp`} alt="flame" className={burnCandle ? 'flame' : 'flame extinguished'} />   
      <img src={`${homepage}/simplebirthdaycake.webp`} alt="birthday cake" />
    </div>
  );
}

export default Cake;