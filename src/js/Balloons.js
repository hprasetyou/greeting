import React, { useState } from 'react';

const Balloons = ({ isActive }) => {
    const [newPos, setNewPos] = useState({ x: 0, y: 0 });
    const homepage = process.env.PUBLIC_URL || '';    

    const handleClick = () => {
        setNewPos({
            x: newPos.x + Math.floor(Math.random() * 21) - 10,
            y: newPos.y + Math.floor(Math.random() * 30) - 10
        })
    };

    return (<div className={isActive?'balloons release':'balloons'} onClick={handleClick} 
        style={{
            transform: `translate(${newPos.x}px, ${newPos.y}px)`,
        }}
        >
        <img src={`${homepage}/balloon2.webp`} alt="balloons" />
    </div>)

}

export default Balloons