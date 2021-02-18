import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import NavBar from './NavBar'
import Logo from './Logo'
import FuzeList from './FuzeList'
import { format } from 'date-fns'
import 'react-calendar/dist/Calendar.css';
import '../stylesheets/calendar.css'
import Filter from './Filter';

function ViewFuzes() {
    const [value, onChange] = useState(new Date());
    const [fuzeFull, setFuzeFull] = useState([])

    const getFuzes = async () => {
        // fetch uses the "proxy" value set in client/package.json
        let response = await fetch("/Fuzes/")
        let fuze = await response.json()
        setFuzeFull(fuze)
    }

    useEffect(() => {
        getFuzes()
    }, [])

    function seeDate(thing){
        if(thing=== undefined){
            return
        }
        let month = ''
        let actualDate = thing.startDate.split('T')
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
        let splitValue= combinedDate.split(" ")
        let number=splitValue.slice(1,2)
        let numberString=number.toString()
        let numberPure=numberString.slice(0,2)
        if(numberPure.charAt(0)==0){
            numberPure=numberPure.slice(1,2)
            combinedDate=month.concat(numberPure, ', ', yearNumber)
        }
        let finalSelector=`"${combinedDate}"`
        if(document.querySelector(`abbr[aria-label*=${finalSelector}]`)===null){
            return
        }
        document.querySelector(`abbr[aria-label*=${finalSelector}]`).textContent=`${numberPure} ♦`
    }

    function setMaxDate() {
        if (new Date().getMonth() >= 5) {
            return new Date(`${(new Date().getFullYear()) + 2}`)
        } else {
            return new Date(`${(new Date().getFullYear()) + 1}`)
        }
    }

    function setMinDetail() {
        if (new Date().getMonth() >= 5) {
            return "decade"
        } else {
            return "year"
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <div className="calendarHolder">
                <Calendar
                    onChange={onChange}
                    value={value}
                    calendarType="US"
                    minDate={new Date()}
                    maxDate={setMaxDate()}
                    minDetail={setMinDetail()}
                />
            </div>
            <Filter
                filters={format(value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")}
                fuzeFull={fuzeFull}
                setFuzeFull={setFuzeFull}
                category="startDate"
                criteria='date'>
            </Filter>
            <button onClick={getFuzes}>Reset</button>
            <FuzeList fuzeFull={fuzeFull} setFuzeFull={setFuzeFull}></FuzeList>
            <p>The UTC date is {(format(new Date('2020-11-20T07:00:00.000+00:00'), 'MMMM dd, yyyy'))}</p>
            <p>The chosen date is {format(value, 'MMMM dd, yyyy')}</p>
            {fuzeFull.map(seeDate)}
        </div>
    );
}

export default ViewFuzes;
