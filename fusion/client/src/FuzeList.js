import './FuzeList.css'
import React from 'react'
import { useState, useEffect } from 'react';
import FuzeModal from './FuzeModal'
import FuzeItem from './FuzeItem'
import Pagination from './Pagination'

const FuzeList = (props) => {
    const [modalStatus, setModalStatus] = useState(' notActive')
    const [fuzeChoice, setFuzeChoice] = useState('')
    const [modalDate, setModalDate] = useState('')
    const [fuzeFull, setFuzeFull] = useState([])
    const [pageStatus, setPageStatus] =useState(0)
    
    useEffect(() => {
        const getSandbox = async () => {
            // fetch uses the "proxy" value set in client/package.json
            let response = await fetch('/Sandbox/nextSevenDays');
            let fuze = await response.json();
            setFuzeFull(fuze);
        };
        getSandbox();
    }, []);


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

    function changePage(number){
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
                default: month = 'Something broke pls send halp '
            }
            let combinedDate = month.concat(dayNumber,', ', yearNumber)
            setModalDate(combinedDate)
        }
    }


    // Modal function
    window.onclick = function (event) {
        if (event.target === document.querySelector('.fuzeModal')) {
            setModalStatus(' notActive')
        }
    }


    //All dynamically built elements
    let divCount=0
    function makeDiv(thing, index) {
        if(divCount<(fuzeFull.length)/10){
            divCount++
            fuzecount=0
            return (
                <div key={index} className={'transition hidden fuzeHolder fuzeGroup'+divCount}>{fuzeFull.map(makeFuze)}</div>
            ) 
        }
    }

    let fuzecount=0
    let fuzeIndex=-1
    function makeFuze(fuze, index) {
        if(fuzecount<10){
            fuzecount++
            fuzeIndex++
            if(fuzeFull[fuzeIndex]===undefined){
                return undefined
            }
            return (
                <FuzeItem key={index} fuzeObject={fuzeFull[fuzeIndex]} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            ) 
        }    
    }

   

    let pageCount=0
    function makePage(thing, index) {
        if(pageCount<(fuzeFull.length)/10){
            pageCount++
            return (
                <Pagination key={index} number={pageCount} pageStatus={pageStatus} changePage={changePage}></Pagination>
            ) 
        }
    }


    return (
        <div className='fuzeContainer'>
            <div className='fuzeWeek'>
                {/* <h1 className='weekDates'></h1> */}
            </div>
            {fuzeFull.map(makeDiv)}
            <div className='fuzeList'></div>
            {/* <FuzeItem fuzeObject={fuzeFull} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            <FuzeItem fuzeObject={fuzeObject.fuze2} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            <FuzeItem fuzeObject={fuzeObject.fuze3} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem> */}
            <div className="ui pagination pageButtons menu">
            {fuzeFull.map(makePage)}
            </div>
            <FuzeModal modal={modalStatus} fuzeItem={fuzeChoice} closeModal={closeModal} date={modalDate}></FuzeModal>
        </div >
    )
}

export default FuzeList