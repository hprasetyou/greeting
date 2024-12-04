import '../css/Card.css';

const BirthdayCard = ({ name, message, setShowCard, showCard = false }) => {
  const handleClick = () => {
    setShowCard(!showCard);
  };

  return (
    <div className={showCard?'card active':'card'} onClick={handleClick}>
      <div className="card-content">
        <h1>Happy Birthday, {name}!</h1>
        <p>{message}</p>
        <br />
      </div>
    </div>
  );
}

export default BirthdayCard;
