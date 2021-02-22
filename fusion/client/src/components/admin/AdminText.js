import React from "react"
import "../../stylesheets/admin.css"
const AdminText = () => {
  return (
    <div className="banner adminBanner">
      <div
        className=" admin-text-display"
        style={{ marginTop: "150px", marginBottom: "2em", color: "black" }}
      >
        <p id="Admin-Text">ADMINISTRATION CONSOLE</p>
      </div>
    </div>
  )
}
export default AdminText
