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
            case 'Animation': return <i className="fas fa-pencil-ruler fa-5x"></i>;
            case 'Artificial Intelligence': return <i className="fas fa-brain fa-5x"></i>;
            case 'Customer Service and Engagement': return <i className="fas fa-users fa-5x"></i>;
            case 'Design': return <i className="fas fa-drafting-compass fa-5x"></i>;
            case 'Education and Training': return <i className="fas fa-book-reader fa-5x"></i>;
            case 'Entrepreneurial': return <i className="fas fa-user-tie fa-5x"></i>;
            case 'Fintech': return <i className="far fa-credit-card fa-5x"></i>;
            case 'Funding': return <i className="fas fa-hand-holding-usd fa-5x"></i>;
            case 'Game Development': return <i className="fas fa-gamepad fa-5x"></i>;
            case 'Hardware': return <i className="fas fa-microchip fa-5x"></i>;
            case 'Information Processing': return <i className="fas fa-hourglass-half fa-5x"></i>;
            case 'Information Systems': return <i className="fas fa-sitemap fa-5x"></i>;
            case 'Information Technology': return <i className="fas fa-server fa-5x"></i>;
            case 'Innovation': return <i className="far fa-lightbulb fa-5x"></i>;
            case 'Investment': return <i className="fas fa-coins fa-5x"></i>;
            case 'Marketing': return <i className="fas fa-ad fa-5x"></i>;
            case 'Nano-Technology': return <i className="fas fa-robot fa-5x"></i>;
            case 'Network Administration': return <i className="fas fa-project-diagram fa-5x"></i>;
            case 'Networking': return <i className="far fa-handshake fa-5x"></i>;
            case 'Product Management': return <i className="fas fa-book fa-5x"></i>;
            case 'Quality Assurance': return <i className="far fa-thumbs-up fa-5x"></i>;
            case 'Security': return <i className="fas fa-shield-alt fa-5x"></i>;
            case 'Social': return <i className="fas fa-user-friends fa-5x"></i>;
            case 'Software Development': return <i className="fab fa-uncharted fa-5x"></i>;
            case 'Start Up': return <i className="fas fa-rocket fa-5x"></i>;
            case 'UX & UI': return <i className="fas fa-vector-square fa-5x"></i>;
            case 'Virtual Reality': return <i className="fas fa-vr-cardboard fa-5x"></i>;
            case 'Web Development': return <i className="fas fa-globe fa-5x"></i>;
            case 'Women in Tech': return <i className="fas fa-female fa-5x"></i>;
            default: return <i className="fas fa-user fa-5x"></i>;
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
                <div className="image">
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