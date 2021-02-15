import "./stylesheets/admin.css"
import React from "react"
import ReactDOM from "react-dom"
//import adminText from "./components/admin/AdminText"
import Logo from "./components/Logo"
 //import Annotation from "./components/Annotation"
 import AdminNav from "./components/AdminNav"
//import Dropdown from "./components/Dropdown"
 import Filter from "./components/Filter"
import { useState, useEffect } from "react"
//import AdminModal from "./components/admin/AdminModal"
import AdminText from "./components/admin/AdminText"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Update from "./components/Update";
import EditFuze from "./components/EditFuze";
import ViewFuze from "./components/ViewFuze";



const App = () => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [fuzeFull, setFuzeFull] = useState([])

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Sandbox/nextSevenDays")
      let fuze = await response.json()
      setFuzeFull(fuze)
    }
    getSandbox()
  }, [])

  return (
    <Router>
    <div className="adminPage">
     
      <AdminNav />
      <Logo />
       <AdminText /> 
       
      {/* <Dropdown updateFilter={setCurrentFilters} />
      <Filter
        filters={currentFilters}
        fuzeFull={fuzeFull}
        setFuzeFull={setFuzeFull}
      />
      <Annotation fuzeFull={fuzeFull} setFuzeFull={setFuzeFull} />
       <AdminModal />  */}
        
      <Switch>
        <Route exact path='/update' component= {Update}></Route>
        <Route exact path='/view fuzes/:_id' component= {ViewFuze}></Route>

             {/* for dynamic routing */}
        <Route exact path = "/fuzes/edit/:_id" component = {EditFuze} />
       </Switch>
          
    </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
