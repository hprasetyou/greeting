import '../css/Cat.css'

const Cat = () => {
  const homepage = process.env.PUBLIC_URL || '';    
  return (
    <div className="cat">
      <img src={`${homepage}/cat.webp`} alt="cat" />
    </div>
  );
}

export default Cat;