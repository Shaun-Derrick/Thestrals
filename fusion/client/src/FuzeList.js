import './FuzeList.css'
import React from 'react'
import { useState, useEffect } from 'react';
import FuzeModal from './FuzeModal'
import FuzeItem from './FuzeItem'
import Pagination from './Pagination'

let fuzeObject = {
    fuze1: {
        date: '2021-01-15T07:00:00.000+00:00',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        title: '#FinancialFeminismFriday Coffee Live with Olivia Norton',
        description: 'https://the51.com/events/financialfeministfriday-coffee-live-with-olivia-norton',
        venue: 'Online',
        type: 'Instagram Live',
        tags1: 'Discussion/Forum/Meeting',
        tags2: 'Finance',
        tags3: null,
        organizer: 'The 51'
    },
    fuze2: {
        date: '2021-01-18T07:00:00.000+00:00',
        startTime: '1:00 PM',
        endTime: '4:30 PM',
        title: 'Breaking Down Barriers for Starting a Business',
        description: 'https://www.eventbrite.ca/e/breaking-down-barriers-to-starting-a-business-tickets-130828458441?aff=erelpanelorg',
        venue: 'Online',
        type: 'Seminar',
        tags1: 'Small Business',
        tags2: null,
        tags3: null,
        organizer: 'Women Entrepreneurs In STEM Program'
    },
    fuze3: {
        date: '2021-03-02T07:00:00.000+00:00',
        startTime: '3:00 PM',
        endTime: '4:15 PM',
        title: '6-Pack App Series',
        description: 'https://www.eventbrite.ca/e/6-pack-app-series-tickets-131115579227?aff=erelpanelorg',
        venue: 'Online',
        type: 'Workshop',
        tags1: 'Startup Education',
        tags2: null,
        tags3: null,
        organizer: 'Women Entrepreneurs In STEM Program'
    },
    fuzeExample: {
        date: Date,
        startTime: String,
        endTime: String,
        title: String,
        description: String,
        venue: String,
        type: String,
        tags1: String,
        tags2: String,
        tags3: String,
        organizer: String
    }

}

/* function getDate(date, type) {
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
        }
        return month
    } else {
        return splitDate[type]
    }
} */

const FuzeList = (props) => {
    const [modal, setModal] = useState('')
    const [fuzeChoice, setFuzeChoice] = useState('')
    const [modalDate, setModalDate] = useState('')
    const [fuzeFull, setFuzeFull] = useState([])
    let count = 1

    useEffect(() => {
        const getSandbox = async () => {
            // fetch uses the "proxy" value set in client/package.json
            let response = await fetch('/Sandbox/');
            let fuze = await response.json();
            setFuzeFull(fuze);
        };
        getSandbox();
    }, []);

    function chooseFuze(fuzeItem) {
        console.log(fuzeItem)
        setFuzeChoice(fuzeItem)
    }

    function openModal() {
        setModal(' active')
    }

    function closeModal() {
        setModal('')
    }

    function getDateShort(date, type) {
        if (date === undefined) {
            return 'Loading!'
        }
        else {
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
                    default: month = 'Something broke pls send halp'
                }
                return month
            } else {
                return splitDate[type]
            }
        }
    }

    function getDateLong(date) {
        if (date === undefined) {
            return 'Loading!'
        } else {
            let month = ''
            let actualDate = date.split('T')
            let splitDate = actualDate[0].split('-')
            let monthNumber = parseInt(splitDate[1])
            let dayNumber = splitDate[2]
            let yearNumber = splitDate[0]
            switch (monthNumber) {
                case 1: month = 'January '
                    break;
                case 2: month = 'February '
                    break;
                case 3: month = 'March '
                    break;
                case 4: month = 'April '
                    break;
                case 5: month = 'May '
                    break;
                case 6: month = 'June '
                    break;
                case 7: month = 'July '
                    break;
                case 8: month = 'August '
                    break;
                case 9: month = 'September '
                    break;
                case 10: month = 'October '
                    break;
                case 11: month = 'November '
                    break;
                case 12: month = 'December '
                    break;
                default: month = 'Something broke pls send halp '
            }
            let combinedDate = month.concat(dayNumber,', ', yearNumber)
            setModalDate(combinedDate)
        }
    }

    window.onclick = function (event) {
        if (event.target === document.querySelector('.fuzeModal')) {
            setModal('')
        }
    }

    

    function testMap(fuze) {
        let fuzeTemplate = <FuzeItem fuzeObject={fuze} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
        if (count <= 10) {
            count++
            return (
                fuzeTemplate
            )
        }
    }

    return (
        <div className='fuzeContainer'>
            <div className='fuzeWeek'>
                <h1 className='weekDates'></h1>
            </div>
            <div>{fuzeFull.map(testMap)}</div>
            {/* <FuzeItem fuzeObject={fuzeFull} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            <FuzeItem fuzeObject={fuzeObject.fuze2} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            <FuzeItem fuzeObject={fuzeObject.fuze3} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem> */}
            <Pagination></Pagination>
            <FuzeModal modal={modal} fuzeItem={fuzeChoice} closeModal={closeModal} date={modalDate}></FuzeModal>
        </div >
    )
}


/* date: Date,
startTime: String,
endTime: String,
title: String,
description: String,
venue: String,
type: String,
tags1: String,
tags2: String,
tags3: String,
organizer: String 

 <div className={"ui page modals dimmer transition fuzeModal " + modal} >
                <div className={'ui modal transition ' + modal}>
                    <i className="close icon" onClick={closeModal}></i>
                    <div className="ui image content">
                        <img className='centered ui small image modalColor' src="https://s2.qwant.com/thumbr/0x380/f/2/a2d510008beabb9b85c8419f334814b052e00070af6d7cca6b218b9626ca3e/thumbs%20up%20child.jpg?u=https%3A%2F%2Fstatic.ecpbuilder.com%2Fclipart%2Fpeople%2Fthumbs%2520up%2520child.jpg&q=0&b=1&p=0&a=1" alt='random ting'></img>
                    </div>
                    <div className="header modalColor">
                        <h2>{fuzeObject.fuze1.title}</h2>
                        <p>{fuzeObject.fuze1.date}</p>
                        <p>{fuzeObject.fuze1.startTime} - {fuzeObject.fuze1.endTime}</p>
                    </div>
                    <div className="content">
                        <div className='modalInfo'>
                            <div>
                                <div className="ui header">Description</div>
                                <p>{fuzeObject.fuze1.description}</p>
                            </div>
                            <div className='modalContent'>
                                <p><a className='modalLink' href={fuzeObject.fuze1.description}><button class="ui button">
                                    Check it out!
                                    </button></a></p>
                            </div>
                            <div className='modalTags'>
                                <p className='modalTagItem'>#{fuzeObject.fuze1.tags1}</p>
                                <p className='modalTagItem'>#{fuzeObject.fuze1.tags2}</p>
                                <p className='modalTagItem'>#{fuzeObject.fuze1.tags3}</p>
                            </div>
                        </div>
                        <div className='Location'>
                            <img className='ui small middle aligned image' alt="Random pic- don't expect the best things in the world" src='https://s2.qwant.com/thumbr/0x380/d/5/edc623b484dfe71f16269638ec033424a016e6097506cbc5cb7122e15bc6e8/wordpress-google-maps-performance.png?u=https%3A%2F%2Fkinsta.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fwordpress-google-maps-performance.png&q=0&b=1&p=0&a=1'></img>
                            <h2>Source</h2>
                            <p>{fuzeObject.fuze1.venue} : {fuzeObject.fuze1.type}</p>
                        </div>
                    </div>
                </div>
            </div> */


export default FuzeList