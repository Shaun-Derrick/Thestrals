import './FuzeList.css'
import React from 'react'
import { useState } from 'react';
import FuzeModal from './FuzeModal'

let fuzeObject = {
    fuze1: {
        date: 'Friday, January 15, 2021',
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
        date: 'Monday, January 18, 2021',
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
        date: 'Tuesday, March 02, 2021',
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

function getMonth(date, type) {
    let newDate = date.split(' ')
    if (type === 1){
    return (newDate[type].slice(0, 3))
    } else{
        return (newDate[type].slice(0, 2))
    }
}

const FuzeList = (props) => {
    const [modal, setModal] = useState('')
    const [fuzeChoice, setFuzeChoice]= useState('')

    function chooseFuze(fuzeItem){
        console.log(fuzeItem)
        setFuzeChoice(fuzeItem)
    }

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
        <div className='fuzeContainer'>
            <div className='fuzeWeek'>
                <h1 className='weekDates'>Jan 10-16</h1>
            </div> 
            <div className="fuzeItem ui link card" onClick={() => {openModal(); chooseFuze(fuzeObject.fuze1)}}>
                <div className="content">
                    <h2 className="fuzeTitle header">{fuzeObject.fuze1.title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuzeObject.fuze1.date, 1)}</p>
                        <span className="day">{getMonth(fuzeObject.fuze1.date, 2)}</span>
                    </div>
                </div>
            </div>
            <div className="fuzeItem ui link card" onClick={() => {openModal(); chooseFuze(fuzeObject.fuze2)}}>
                <div className="middle aligned content">
                    <h2 className="fuzeTitle header">{fuzeObject.fuze2.title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuzeObject.fuze2.date, 1)}</p>
                        <span className="day">{getMonth(fuzeObject.fuze2.date, 2)}</span>
                    </div>
                </div>
            </div>
            <div className=" fuzeItem ui link card" onClick={() => {openModal(); chooseFuze(fuzeObject.fuze3)}}>
                <div className="middle aligned content">
                    <h2 className="fuzeTitle header">{fuzeObject.fuze3.title}</h2>
                </div>
                <div className="fuzeDate image">
                    <i className=" huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuzeObject.fuze3.date, 1)}</p>
                        <span className="day">{getMonth(fuzeObject.fuze3.date, 2)}</span>
                    </div>
                </div>
            </div>
            <FuzeModal modal={modal} fuzeItem={fuzeChoice} closeModal={closeModal}></FuzeModal>
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