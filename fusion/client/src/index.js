import React from 'react'
import ReactDOM from "react-dom"
import MainPage from './components/MainPage'

const App=()=>{
    return(
        <MainPage></MainPage>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));