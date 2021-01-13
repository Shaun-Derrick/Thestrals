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
        date: 'February 1',
        name: 'Country Count thingy thing'
    }
}

function getMonth(date, type) {
    let newDate = date.split(' ')
    return (newDate[type].slice(0, 3))
}

const FuseList = (props) => {
    const [modal, setModal] = useState('')

    function openModal(){
        setModal('active')
        console.log({modal})
    }

    function closeModal(){
        setModal('')
        console.log({modal})
    }

    return (
        <div className='fuseContainer'>
            <div className='fuseWeek'>
                <h1 className='weekDates'>Jan 10-16</h1>
            </div>
            <div className="ui link card">
                <div className="image">
                    <i className="fuseItemDate huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuseObject.fuse1.date, 0)}</p>
                        <span className="day">{getMonth(fuseObject.fuse1.date, 1)}</span>
                    </div>
                </div>
                <div className="middle aligned content">
                    <h2 className="header">{fuseObject.fuse1.name}</h2>
                </div>
            </div>
            <div className="ui link card">
                <div className="image">
                    <i className="fuseItemDate huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuseObject.fuse2.date, 0)}</p>
                        <span className="day">{getMonth(fuseObject.fuse2.date, 1)}</span>
                    </div>
                </div>
                <div className="middle aligned content">
                    <h2 className="header">{fuseObject.fuse2.name}</h2>
                </div>
            </div>
            <div className="ui link card">
                <div className="image">
                    <i className="fuseItemDate huge calendar outline icon"></i>
                    <div className="date">
                        <p className="month">{getMonth(fuseObject.fuse3.date, 0)}</p>
                        <span className="day">{getMonth(fuseObject.fuse3.date, 1)}</span>
                    </div>
                </div>
                <div className="middle aligned content">
                    <h2 className="header">{fuseObject.fuse3.name}</h2>
                </div>
            </div>
            <button onClick={openModal}>Open Modal</button>
            <div className={"ui modal "+ modal} >
                <i className="close icon" onClick={closeModal}></i>
                <div className="header">
                    Profile Picture
                </div>
                <div className="image content">
                    <div className="ui medium image">
                        <img src="/images/avatar/large/chris.jpg"></img>
                    </div>
                    <div className="description">
                        <div className="ui header">We've auto-chosen a profile image for you.</div>
                        <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button">
                        Nope
                    </div>
                    <div className="ui positive right labeled icon button">
                        Yep, that's me
                        <i className="checkmark icon"></i>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default FuseList