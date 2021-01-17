import './FuseList.css'
import React from 'react'
import { useState } from 'react';

let fuseObject = {
    fuse1: {
        date: 'January 15',
        startTime: '10:00',
        endTime: '11:00',
        title: '#FinancialFeminismFriday Coffee Live with Olivia Norton',
        description: 'https://the51.com/events/financialfeministfriday-coffee-live-with-olivia-norton',
        venue: 'Online',
        type: 'Instagram Live',
        tags1: 'Discussion/Forum/Meeting',
        tags2: 'Finance',
        tags3: null,
        organizer: 'The 51'
    },
    fuse2: {
        date: 'January 18',
        startTime: '13:00',
        endTime: '16:30',
        title: 'Breaking Down Barriers for Starting a Business',
        description: 'https://www.eventbrite.ca/e/breaking-down-barriers-to-starting-a-business-tickets-130828458441?aff=erelpanelorg',
        venue: 'Online',
        type: 'Seminar',
        tags1: 'Small Business',
        tags2: null,
        tags3: null,
        organizer: 'Women Entrepreneurs In STEM Program'
    },
    fuse3: {
        date: 'March 02',
        startTime: '15:00',
        endTime: '16:15',
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

function getMonth(date, type) {
    let newDate = date.split(' ')
    return (newDate[type].slice(0, 3))
}

const FuseList = (props) => {
    const [modal, setModal] = useState('')

    function openModal() {
        setModal(' active')
    }

    function closeModal() {
        setModal('')
    }

    window.onclick = function (event) {
        if (event.target === document.querySelector('.fuzeModal')) {
            setModal('')
        }
    }

    return (
        <div className='fuseContainer'>
            <div className='fuseWeek'>
                <h1 className='weekDates'>Jan 10-16</h1>
            </div>
            <div className="fuzeItem ui link card" onClick={openModal}>
                <div className="content">
                    <h2 className="fuzeTitle header">{fuseObject.fuse1.title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuseObject.fuse1.date, 0)}</p>
                        <span className="day">{getMonth(fuseObject.fuse1.date, 1)}</span>
                    </div>
                </div>
            </div>
            <div className="fuzeItem ui link card" onClick={openModal}>

                <div className="middle aligned content">
                    <h2 className="fuzeTitle header">{fuseObject.fuse2.title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuseObject.fuse2.date, 0)}</p>
                        <span className="day">{getMonth(fuseObject.fuse2.date, 1)}</span>
                    </div>
                </div>

            </div>
            <div className=" fuzeItem ui link card" onClick={openModal}>

                <div className="middle aligned content">
                    <h2 className="fuzeTitle header">{fuseObject.fuse3.title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuseObject.fuse3.date, 0)}</p>
                        <span className="day">{getMonth(fuseObject.fuse3.date, 1)}</span>
                    </div>
                </div>

            </div>
            <div className={"ui page modals dimmer transition fuzeModal " + modal} >
                <div className={'ui modal transition ' + modal}>
                    <i className="close icon" onClick={closeModal}></i>

                    <div className="ui image content">
                        <img className='centered ui small image modalColor' src="https://s2.qwant.com/thumbr/0x380/f/2/a2d510008beabb9b85c8419f334814b052e00070af6d7cca6b218b9626ca3e/thumbs%20up%20child.jpg?u=https%3A%2F%2Fstatic.ecpbuilder.com%2Fclipart%2Fpeople%2Fthumbs%2520up%2520child.jpg&q=0&b=1&p=0&a=1" alt='random ting'></img>
                    </div>
                    <div className="header modalColor">
                        <h2>{fuseObject.fuse1.title}</h2>
                        <p>{fuseObject.fuse1.date}</p>
                        <p>{fuseObject.fuse1.startTime} - {fuseObject.fuse1.endTime}</p>
                    </div>

                    <div className="content">
                        <div className='modalInfo'>
                            <div>
                                <div className="ui header">Description</div>
                                <p>{fuseObject.fuse1.description}</p>
                            </div>
                            <div className='modalContent'>
                                <div className='linkContent'>
                                    <div className="ui header">Links</div>
                                    <p><a className='modalLink' href={fuseObject.fuse1.description}>{fuseObject.fuse1.description}</a></p>
                                    <p><a className='modalLink' href={fuseObject.fuse1.description}>{fuseObject.fuse1.description}</a></p>
                                </div>
                            </div>
                            <div className='modalTags'>
                                <p className='modalTagItem'>#{fuseObject.fuse1.tags1}</p>
                                <p className='modalTagItem'>#{fuseObject.fuse1.tags2}</p>
                                <p className='modalTagItem'>#{fuseObject.fuse1.tags3}</p>
                            </div>
                        </div>

                        <div className='Location'>
                            <img className='ui small middle aligned image' alt="Random pic- don't expect the best things in the world" src='https://s2.qwant.com/thumbr/0x380/d/5/edc623b484dfe71f16269638ec033424a016e6097506cbc5cb7122e15bc6e8/wordpress-google-maps-performance.png?u=https%3A%2F%2Fkinsta.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fwordpress-google-maps-performance.png&q=0&b=1&p=0&a=1'></img>
                            <h2>Source</h2>
                            <p>{fuseObject.fuse1.venue} : {fuseObject.fuse1.type}</p>
                        </div>

                    </div>
                </div>
            </div>
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
organizer: String */

export default FuseList