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
       <div className="admin-portal-display">
        <p>Your Fusion administration console</p>
        <p>create, update and delete Fuzes</p>
        <p>from here</p>
      </div>
    </div>
  );
};

export default AdminHome