import React from 'react'

let prevPageNumber = 0
function openPage(chosenNumber, prevNumber) {
    let chosenPage = '.fuzeGroup' + chosenNumber
    let prevPage = '.fuzeGroup' + prevNumber
    if (document.querySelector(prevPage) === null) {
        document.querySelector(chosenPage).classList.remove('hidden')
        prevPageNumber = chosenNumber
    }
    else {
        document.querySelector(prevPage).classList.add('hidden')
        document.querySelector(chosenPage).classList.remove('hidden')
        prevPageNumber = chosenNumber
    }

}

const PaginationUpdate = (props) => {
    return (
        <button className={"item pageButton"} onClick={() => { props.changePage(props.number); openPage(props.number, prevPageNumber) }}>{props.number}</button>
    )
}

export default PaginationUpdate;