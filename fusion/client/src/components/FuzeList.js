import "../stylesheets/FuzeList.css"
import React from 'react'
import { useState } from 'react';
import FuzeModal from './FuzeModal'
import FuzeItem from './FuzeItem'
import Pagination from './Pagination'

const FuzeList = (props) => {
    const [modalStatus, setModalStatus] = useState(' notActive')
    const [fuzeChoice, setFuzeChoice] = useState('')
    const [modalDate, setModalDate] = useState('')
    const [pageStatus, setPageStatus] = useState(0)

    //State functions
    function chooseFuze(fuzeItem) {
        setFuzeChoice(fuzeItem)
    }

    function openModal() {
        setModalStatus(' active')
    }

    function closeModal() {
        setModalStatus(' notActive')
    }

    function changePage(number) {
        setPageStatus(number)
    }

    //Date functions- probably will combine this with another later
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
                default: month = ' '
            }
            let combinedDate = month.concat(dayNumber, ', ', yearNumber)
            setModalDate(combinedDate)
        }
    }

    //sets icon based on tag
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
                default: return <i className="far fa-user fa-5x"></i>;
            }
        }
    }
    


    // Modal function
    window.onclick = function (event) {
        if (event.target === document.querySelector('.fuzeModal')) {
            setModalStatus(' notActive')
        }
    }


    //All dynamically built elements
    let divCount = 0
    function makeDiv(thing, index) {
        if (divCount < (props.fuzeFull.length) / 5) {
            divCount++
            fuzecount=0
            if(divCount===1){
                return (
                    <div key={index} className={'transition fuzeHolder fuzeGroup' + divCount}>{props.fuzeFull.map(makeFuze)}</div>
                )
            }
            return (
                <div key={index} className={'transition hidden fuzeHolder fuzeGroup' + divCount}>{props.fuzeFull.map(makeFuze)}</div>
                )
        }
    }

    let fuzecount = 0
    let fuzeIndex = -1
    function makeFuze(fuze, index) {
        if (fuzecount < 5) {
            fuzecount++
            fuzeIndex++
            if (props.fuzeFull[fuzeIndex] === undefined) {
                return undefined
            }
            return (
                <FuzeItem key={index} fuzeObject={props.fuzeFull[fuzeIndex]} chooseFuze={chooseFuze} openModal={openModal} chooseIcon={chooseIcon} getDateLong={getDateLong}></FuzeItem>
            )
        }
    }



    let pageCount = 0
    function makePage(thing, index) {
        if (pageCount < (props.fuzeFull.length) / 5) {
            pageCount++
            return (
                <Pagination key={index} number={pageCount} pageStatus={pageStatus} changePage={changePage}></Pagination>
            )
        }
    }

    return (
        <div className='fuzeContainer'>
             <div className="ui pagination pageButtons menu">
                {props.fuzeFull.map(makePage)}
            </div>
            <div className='fuzeList'>
                {props.fuzeFull.map(makeDiv)}
            </div>
            <FuzeModal modal={modalStatus} fuzeItem={fuzeChoice} closeModal={closeModal} chooseIcon={chooseIcon} date={modalDate}></FuzeModal>
        </div>
    )
}

export default FuzeList