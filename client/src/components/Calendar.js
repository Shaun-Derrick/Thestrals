import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import NavBar from './NavBar'
import Logo from './Logo'
import FuzeList from './FuzeList'
import { format, add, isAfter, isBefore, parseISO } from 'date-fns'
import 'react-calendar/dist/Calendar.css';
import '../stylesheets/calendar.css'
import Filter from './Filter';

function ViewFuzes() {
    const [value, onChange] = useState(new Date());
    const [fuzeFull, setFuzeFull] = useState([])
    const [allFuzes, setAllFuzes]= useState([])
    

    const getFuzes = async () => {
        let response = await fetch("/Fuzes/")
        let fuze = await response.json()
        setFuzeFull(fuze)
    }

    const getAllFuzes = async () => {
        let response = await fetch("/Fuzes/")
        let fuze = await response.json()
        setAllFuzes(fuze)}

    useEffect(() => {
        getFuzes()
        getAllFuzes()
    }, [])

    useEffect(() => {
        fuzeFull.map(labelDates)
      }, [fuzeFull])
    
    function labelDates(thing) {
        if (thing === undefined) {
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
        let splitValue = combinedDate.split(" ")
        let number = splitValue.slice(1, 2)
        let numberString = number.toString()
        let numberPure = numberString.slice(0, 2)
        if (numberPure.charAt(0) == 0) {
            numberPure = numberPure.slice(1, 2)
            combinedDate = month.concat(numberPure, ', ', yearNumber)
        }
        let finalSelector = `"${combinedDate}"`
        if (document.querySelector(`abbr[aria-label*=${finalSelector}]`) === null) {
            return
        }
        document.querySelector(`abbr[aria-label*=${finalSelector}]`).textContent = `${numberPure} ♦`
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
                    nextLabel={null}
                    prevLabel={null}
                    next2Label={null}
                    prev2Label={null}
                    minDate={new Date()}
                    maxDate={setMaxDate()}
                    minDetail={setMinDetail()}
                    onClickMonth={(value, event) =>{
                        let chosenMonth = value
                        let nextMonth = add(value, { months: 1 })
                        const filterItems = () => {
                            let fuzes = allFuzes.filter((fuzes) => {
                                if (isAfter(parseISO(fuzes.startDate), chosenMonth)&& isBefore(parseISO(fuzes.startDate), nextMonth))
                                    return fuzes
                            })
                            if (fuzes.length === 0) {
                                setFuzeFull([{ Title: `No Fuzes found! Try a different month.`, startDate: ' ', endDate: ' ' }])
                            }
                            else {
                                setFuzeFull(fuzes)
                            }
                        }
                        filterItems(fuzeFull)
                    }}/>
            </div>
            <Filter
                filters={format(value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")}
                fuzeFull={fuzeFull}
                setFuzeFull={setFuzeFull}
                category="startDate"
                criteria='date'
                route="/Fuzes/">
            </Filter>
            <FuzeList fuzeFull={fuzeFull} setFuzeFull={setFuzeFull} filters={value}></FuzeList>
        </div>
    );
}

export default ViewFuzes;
