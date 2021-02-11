import React from "react"
import Logo from "../Logo"
import AdminNav from "./AdminNav"
import AdminText from "./AdminText"
import "../../stylesheets/admin.css"

const AdminHome = () => {
  return (
    <div className="adminPage">
      <AdminNav/>
      <Logo/>
       <AdminText />
    </div>
  );
};

export default AdminHome