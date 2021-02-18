import React from "react"
import Logo from "../Logo"
import AdminNav from "./AdminNav"
import AdminHeader from "./AdminHeader"
import AdminActions from "./AdminActions"
import AdminText from "./AdminText"
import "../../stylesheets/admin.css"

const AdminHome = () => {
  return (
    <div className="adminPage">
      <AdminNav/>
      <Logo/>
      <AdminHeader />
       <AdminText />
       <AdminActions />

    </div>
  );
};

export default AdminHome