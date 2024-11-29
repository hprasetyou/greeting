import '../css/Cake.css';
const Cake = (burnCandle = true) => {
  const homepage = process.env.PUBLIC_URL || '';
  return (
    <div class="cake">
      <img src={`${homepage}/flame.webp`} alt="flame" className="flame" />   
      <img src={`${homepage}/simplebirthdaycake.webp`} alt="birthday cake" />
    </div>
  );
}

export default Cake;