import '../css/Card.css';

const BirthdayCard = ({ name, message }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Happy Birthday, {name}!</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default BirthdayCard;
