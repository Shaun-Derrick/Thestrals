import "../stylesheets/admin.css"
import React from "react"
import { Card } from 'semantic-ui-react'
const AdminActions = () => {
  return (
    <div className="banner">
      <div
        className="mission-statement-display"
        style={{ marginBottom: "100px" }}
      >
        <p>WHAT WOULD YOU LIKE TO DO?</p>
       
      </div>
      {/* <div className="platform-statement-display">
      
      




      </div> */}
      <div>
        {/* const CardExampleFluid = () => ( */}
  <Card.Group>
    <Card fluid color='red' header='Create a new Fuze' />
    <Card fluid color='orange' header='Update an existing Fuze' />
    <Card fluid color='yellow' header='ODelete a Fuze' />
  </Card.Group>
{/* ) */}
      </div>
    </div>
  )
}
export default AdminActions
