import React from 'react'

function getDateShort(date, type) {
    if (date === undefined || date===null) {
        return 'Loading!'
    } else {
        let month = ''
        let actualDate = date.split('T')
        let splitDate = actualDate[0].split('-')
        let dateNumber = parseInt(splitDate[type])
        if (type === 1) {
            switch (dateNumber) {
                case 1: month = 'Jan'
                    break;
                case 2: month = 'Feb'
                    break;
                case 3: month = 'Mar'
                    break;
                case 4: month = 'Apr'
                    break;
                case 5: month = 'May'
                    break;
                case 6: month = 'Jun'
                    break;
                case 7: month = 'Jul'
                    break;
                case 8: month = 'Aug'
                    break;
                case 9: month = 'Sep'
                    break;
                case 10: month = 'Oct'
                    break;
                case 11: month = 'Nov'
                    break;
                case 12: month = 'Dec'
                    break;
                default: month = ' '
            }
            return month
        } else {
            return splitDate[type]
        }
    }
}

const FuzeItem = (props) => {
    if (props.fuzeObject.startDate === null) {
        return (
            <div className="fuzeItem ui card">
                <div className="content">
                    <h2 className="fuzeTitle header">Broken! Pls fix soon</h2>
                </div>
            </div>
        )}
    else if (props.fuzeObject.startDate === " ") {
        return (
            <div className="fuzeItem ui card">
                <div className="content">
                    <h2 className="fuzeTitle header">{props.fuzeObject.Title}</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className="fuzeItem ui link card" onClick={() => { props.openModal(); props.chooseFuze(props.fuzeObject); props.getDateLong(props.fuzeObject.startDate) }}>
                <div className="image">
                    {props.chooseIcon(props.fuzeObject.tags)}
                </div>
                <div className="content">
                    <h2 className="fuzeTitle header">{props.fuzeObject.Title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getDateShort(props.fuzeObject.startDate, 1)}</p>
                        <span className="day">{getDateShort(props.fuzeObject.startDate, 2)}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FuzeItem