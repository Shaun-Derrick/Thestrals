import React from 'react';
import Logo from "../Logo"
import AdminNav from "./AdminNav"
import AdminHeader from "./AdminHeader"
import AdminText from "./AdminText"
import CreateFuzeForm from "./CreateFuzeForm"
import "../../stylesheets/admin.css"
import "../../stylesheets/index.css"


const CreateFuze = () => {
  return(
  <div id ='adminPage'>
    <AdminNav/>
    <Logo/>
    <AdminHeader />
     <AdminText />
     <CreateFuzeForm />
  </div>
  )
};

export default CreateFuze;