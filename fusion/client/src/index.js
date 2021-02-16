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
import Edit from './components/admin/Edit'
import View from './components/admin/View'
import Signup from "./components/admin/Signup"
import Dashboard from "./components/admin/Dashboard"
import PrivateRoute from "./components/admin/PrivateRoute"
import ForgotPassword from "./components/admin/ForgotPassword"
import UpdateProfile from "./components/admin/UpdateProfile"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path='/' component={MainPage}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/services' component={Services}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                    <Route exact path='/login' component={AdminLogin}></Route>
                    <PrivateRoute exact path='/admin' component={AdminHome}></PrivateRoute>
                    <PrivateRoute exact path='/admin/create' component={Create}></PrivateRoute>
                    <PrivateRoute exact path='/admin/update' component={Update}></PrivateRoute>
                    <PrivateRoute exact path='/admin/delete' component={Delete}></PrivateRoute>
                    <PrivateRoute exact path='/admin/update/:_id' component={Edit}></PrivateRoute>
                    <PrivateRoute exact path='/admin/view/:_id' component={View}></PrivateRoute>
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <PrivateRoute path="/signup" component={Signup} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));