import Sprinkles from "./Sprinkles";
import Balloons from "./Balloons";
import Calendar from "./Calendar";

const Background = ({sprinkleRain = false}) => {
    const homepage = process.env.PUBLIC_URL || '';    
    const targetDate = '2024-12-07';
    return (
        <div>
            <div className="floor">
                <img src={`${homepage}/floor.webp`} alt="floor" />
            </div>
            <Calendar targetDate={targetDate}/>
            <Sprinkles isActive={sprinkleRain}/>
            <Balloons isActive={sprinkleRain}/>
            <div className="flag-line"></div>
            <div className="flags">
                <img src={`${homepage}/hanging-flags.webp`} alt="flags"  />  
            </div>
            
        </div>
    )
}

export default Background;