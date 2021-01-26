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
        setModalStatus(' active')
    }

    function closeModal() {
        setModalStatus(' notActive')
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
            setModalStatus(' notActive')
        }
    }

    let fuzeCount = 1
    function makeFuze(fuze) {
        let fuzeTemplate = <FuzeItem fuzeObject={fuze} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
        if (fuzeCount <= 10) {
            fuzeCount++
            return (
                fuzeTemplate
            ) 
        } else {
                fuzeCount=1
            }
    }
    let fuzeList=fuzeFull.map(makeFuze)

    return (
        <div className='fuzeContainer'>
            <div className='fuzeWeek'>
                {/* <h1 className='weekDates'></h1> */}
            </div>
            {fuzeList}
            <div className='fuzeList'></div>
            {/* <FuzeItem fuzeObject={fuzeFull} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            <FuzeItem fuzeObject={fuzeObject.fuze2} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem>
            <FuzeItem fuzeObject={fuzeObject.fuze3} chooseFuze={chooseFuze} openModal={openModal} getDateLong={getDateLong}></FuzeItem> */}
            <Pagination></Pagination>
            <FuzeModal modal={modalStatus} fuzeItem={fuzeChoice} closeModal={closeModal} date={modalDate}></FuzeModal>
        </div >
    )
}

export default FuzeList