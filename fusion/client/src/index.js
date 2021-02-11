import React from 'react'
import ReactDOM from "react-dom"
import MainPage from './components/MainPage'
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import AdminLogin from './components/admin/AdminLogin'
import AdminHome from './components/admin/AdminHome'
import Create from './components/admin/Create'
import Update from './components/admin/Update'
import Delete from './components/admin/Delete'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component= {MainPage}></Route>
                <Route exact path='/about' component= {About}></Route>
                <Route exact path='/services' component= {Services}></Route>
                <Route exact path='/contact' component= {Contact}></Route>
                <Route exact path='/login' component= {AdminLogin}></Route>
                <Route exact path='/admin' component= {AdminHome}></Route>
                <Route exact path='/admin/create' component= {Create}></Route>
                <Route exact path='/admin/update' component= {Update}></Route>
                <Route exact path='/admin/delete' component= {Delete}></Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));