import React, { useState } from 'react';

const Balloons = ({ isActive }) => {
    const [newPos, setNewPos] = useState({ x: 0, y: 0 });
    const homepage = process.env.PUBLIC_URL || '';    

    const handleClick = () => {
        const newX = newPos.x + Math.floor(Math.random() * 21) - 10
        const newY = newPos.y + Math.floor(Math.random() * 21) - 10
        setNewPos({
            x: newX > 100 ? 100: newX,
            y: newY > 100 ? 100: newY
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