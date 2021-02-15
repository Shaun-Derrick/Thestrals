import "../../stylesheets/admin.css"
import React from "react"
const AdminText = () => {
  return (
    <div className="banner">
      <div
        className=" admin-text-display"
        style={{ marginTop: "150px", marginBottom: "" }}
      >
          <p className="AdminText">ADMINISTRATION CONSOLE</p>
      
      </div>
    
             
      <br />
      <div className="admin-portal-display">
        <p>Your Fusion administration console</p>
        <p>create, update and delete Fuzes</p>
        <p>from here</p>
      </div>
    </div>
  )
}
export default AdminText
