import React from 'react'

function getDateShort(date, type) {
    if (date === undefined) {
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

function chooseIcon(tag) {
    if (tag === undefined) {
        return 'Loading!'
    } else {
        switch (tag) {
            case 'Animation': return <i class="fas fa-pencil-ruler fa-5x"></i>;
            case 'Artificial Intelligence': return <i class="fas fa-brain fa-5x"></i>;
            case 'Customer Service and Engagement': return <i class="fas fa-users fa-5x"></i>;
            case 'Design': return <i class="fas fa-drafting-compass fa-5x"></i>;
            case 'Education and Training': return <i class="fas fa-book-reader fa-5x"></i>;
            case 'Entrepreneurial': return <i class="fas fa-user-tie fa-5x"></i>;
            case 'Fintech': return <i class="far fa-credit-card fa-5x"></i>;
            case 'Funding': return <i class="fas fa-hand-holding-usd fa-5x"></i>;
            case 'Game Development': return <i class="fas fa-gamepad fa-5x"></i>;
            case 'Hardware': return <i class="fas fa-microchip fa-5x"></i>;
            case 'Information Processing': return <i class="fas fa-hourglass-half fa-5x"></i>;
            case 'Information Systems': return <i class="fas fa-sitemap fa-5x"></i>;
            case 'Information Technology': return <i class="fas fa-server fa-5x"></i>;
            case 'Innovation': return <i class="far fa-lightbulb fa-5x"></i>;
            case 'Investment': return <i class="fas fa-coins fa-5x"></i>;
            case 'Marketing': return <i class="fas fa-ad fa-5x"></i>;
            case 'Nano-Technology': return <i class="fas fa-robot fa-5x"></i>;
            case 'Network Administration': return <i class="fas fa-project-diagram fa-5x"></i>;
            case 'Networking': return <i class="far fa-handshake fa-5x"></i>;
            case 'Product Management': return <i class="fas fa-book fa-5x"></i>;
            case 'Quality Assurance': return <i class="far fa-thumbs-up fa-5x"></i>;
            case 'Security': return <i class="fas fa-shield-alt fa-5x"></i>;
        }
    }
}

const FuzeItem = (props) => {
    if (props.fuzeObject.startDate === " ") {
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
                <div class="image">
                    {chooseIcon(props.fuzeObject.tags)}
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