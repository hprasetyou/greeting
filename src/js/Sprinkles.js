
import '../css/Sprinkles.css';


const Sprinkles = ({ isActive }) => {

    return (
        <div className="sprinkles">
        {Array.from({ length: 300 }).map((_, index) => (
            <div
                key={index}
                className={`sprinkle ${isActive ? 'active' : ''}`}
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    height: `${Math.random() * 10 + 10}px`,
                    animationDuration: `${Math.random() * 4 + 1.2}s`,
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    transform: `rotate(${Math.random() * 360}deg) ${isActive ? '':'translateY(-120vh)'}`
                }}
            ></div>
        ))}
        </div>
    );
}

export default Sprinkles;