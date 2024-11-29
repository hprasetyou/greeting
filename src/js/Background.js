import Sprinkles from "./Sprinkles";
import Balloons from "./Balloons";

const Background = ({sprinkleRain = false}) => {
    const homepage = process.env.PUBLIC_URL || '';    
    return (
        <div>
            <Sprinkles isActive={sprinkleRain}/>
            <Balloons isActive={sprinkleRain}/>
            <div className="flag-line"></div>
            <div className="flags">
                <img src={`${homepage}/hanging-flags.webp`} alt="flags"  />  
            </div>
            <div className="table">
                <img src={`${homepage}/table.webp`} alt="table" />  
            </div>
            
        </div>
    )
}

export default Background;