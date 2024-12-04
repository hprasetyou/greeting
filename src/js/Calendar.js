import '../css/Calendar.css';

const Calendar = ({targetDate = null}) => {

    const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const homepage = process.env.PUBLIC_URL || '';

    function getDate(){
        return new Date(targetDate);
    }

    function getDateCount(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    function getFirstDay(year, month) {
        return new Date(`${year}-${month}-01`).getUTCDay();
    }

    
    return (
        <div className="calendar">
            <div className="calendar-header">
                <img src={`${homepage}/calendar-bg.webp`} alt="calendar" />
            </div>
            <div className="calendar-body">
                <div className="calendar-month">{getDate().toLocaleString('default', { month: 'long' })} {getDate().getFullYear()}</div>
                <div className="calendar-weekdays">
                    {dow.map((day, index) => (
                        <div key={index} className="calendar-weekday">{day}</div>
                    ))}
                </div>
                <div className="calendar-days">
                    {Array.from({ length: getFirstDay(getDate().getFullYear(), getDate().getUTCMonth() + 1) }).map((_, index) => (
                        <div key={index} className="calendar-day"></div>
                    ))}
                    {Array.from({ length: getDateCount(getDate().getFullYear(), getDate().getUTCMonth() + 1) }).map((_, index) => (
                        <div key={index} className="calendar-day">
                            {index + 1 === getDate().getUTCDate() && (
                                <img src={`${homepage}/marker.webp`} alt="marker" className="calendar-marker" />
                            )}
                            <span>{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;