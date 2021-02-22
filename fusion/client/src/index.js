import React from "react"
import ReactDOM from "react-dom"
import MainPage from './components/MainPage'
import About from "./components/About"
import Danny from "./components/Danny"
import Debbie from "./components/Debbie"
import Kery from "./components/Kery"
import Shaun from "./components/Shaun"
import Sid from "./components/Sid"
//import Services from "./components/Services"
import Contact from "./components/Contact"
import Calendar from "./components/Calendar"
import AdminLogin from './components/admin/AdminLogin'
import AdminHome from './components/admin/AdminHome'
import Create from './components/admin/Create'
import Update from './components/admin/Update'
import Delete from './components/admin/Delete'
import DeleteFuze from './components/admin/DeleteFuze'
import Edit from './components/admin/Edit'
import View from './components/admin/View'
import Signup from "./components/admin/Signup"
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
                    <Route exact path='/fuzes' component={Calendar}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/danny' component={Danny}></Route>
                    <Route exact path='/debbie' component={Debbie}></Route>
                    <Route exact path='/kery' component={Kery}></Route>
                    <Route exact path='/shaun' component={Shaun}></Route>
                    <Route exact path='/sid' component={Sid}></Route>
                                        {/* <Route exact path='/services' component={Services}></Route> */}
                    <Route exact path='/contact' component={Contact}></Route>
                    <Route exact path='/login' component={AdminLogin}></Route>
                    <PrivateRoute exact path='/admin' component={AdminHome}></PrivateRoute>
                    <PrivateRoute exact path='/admin/create' component={Create}></PrivateRoute>
                    <PrivateRoute exact path='/admin/update' component={Update}></PrivateRoute>
                    <PrivateRoute exact path='/admin/delete' component={Delete}></PrivateRoute>
                    <PrivateRoute exact path = "/admin/delete/:_id" component = {DeleteFuze}></PrivateRoute>
                    <PrivateRoute exact path='/admin/update/:_id' component={Edit}></PrivateRoute>
                    <PrivateRoute exact path='/admin/view/:_id' component={View}></PrivateRoute>
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <PrivateRoute path="/signup" component={Signup} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));
