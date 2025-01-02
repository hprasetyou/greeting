import Sprinkles from "./Sprinkles";
import Balloons from "./Balloons";
import Calendar from "./Calendar";
import Cat from "./Cat";

const Background = ({sprinkleRain = false, targetDate}) => {
    const homepage = process.env.PUBLIC_URL || '';
    return (
        <div>
            <div className="floor-wrap">
                <div className="floor">
                    <img src={`${homepage}/floor.webp`} alt="floor" />
                </div>
                <Cat shouldShowDialog={!sprinkleRain}/>
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