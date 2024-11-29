const Background = () => {
    const homepage = process.env.PUBLIC_URL || '';
    return (
        <div>
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