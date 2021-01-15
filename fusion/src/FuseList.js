import './FuseList.css'
import React from 'react'
import { useState } from 'react';

let fuseObject = {
    fuse1: {
        date: 'January 10',
        name: 'Access Alberta something something'
    },
    fuse2: {
        date: 'January 11',
        name: 'Big Buff other thing'
    },
    fuse3: {
        date: 'February 01',
        name: 'Country Count thingy thing'
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
        setModal('visible active')
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
                    <h2 className="fuzeTitle header">{fuseObject.fuse1.name}</h2>
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
                    <h2 className="fuzeTitle header">{fuseObject.fuse2.name}</h2>
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
                    <h2 className="fuzeTitle header">{fuseObject.fuse3.name}</h2>
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
                        Example Fuze
                    </div>
                    <div className="content">
                        <div className="description">
                            <div className="ui header">Description</div>
                            <p>Random poop. All the poop. Never-ending poop. Where did all this poop come from? Someone please help. I am literally drowning in poop. Oh no, it's gotten into my sneakers. I paid $300 for these replica Nike shows from Back to the Future. Dear God, please save me from this poopy suffering.</p>
                        </div>
                        <div className='modalContent'>
                            <div className='linkContent'>
                                <div className="ui header">Links</div>
                                <a className='modalLink' href='#'>www.silly.com</a><br></br>
                                <a className='modalLink'href='#'>www.goose.com</a>
                            </div>
                            <img className='ui small middle aligned image' src='https://s2.qwant.com/thumbr/0x380/d/5/edc623b484dfe71f16269638ec033424a016e6097506cbc5cb7122e15bc6e8/wordpress-google-maps-performance.png?u=https%3A%2F%2Fkinsta.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fwordpress-google-maps-performance.png&q=0&b=1&p=0&a=1'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FuseList