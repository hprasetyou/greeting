import '../css/Card.css';

const BirthdayCard = ({ name, message }) => {
  const handleClick = () => {
    const card = document.querySelector('.card');
    card.classList.toggle('active');
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-content">
        <h1>Happy Birthday, {name}!</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default BirthdayCard;
