import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"
import "../../stylesheets/admin.css"

const AdminNav = () => {
  const [navLinkOpen, navLinkToggle] = useState(false)
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")
    try {
      await logout()
    } catch {
      setError("Failed to log out")
      history.push("/")
    }
  }

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen)
  }
  const renderClasses = () => {
    let classes = "navlinks"
    if (navLinkOpen) {
      classes += " active"
    }
    return classes
  }

  return (
    <nav>
      <div className="homeNavBar">
        <ul className={renderClasses()}>
          <li className="adminLink">
            {/* <li className="adminLink, AdminNavLinks"> */}
            {/* <li className="AdminNavLink"> */}
            <Link to="/admin"> Home</Link>
          </li>
          <li className="adminLink">
            <Link to="/admin/create">Create</Link>
          </li>
          <li className="adminLink">
            <Link to="/admin/update">Update</Link>
          </li>
          <li className="adminLink">
            <Link to="/admin/delete">Delete</Link>
          </li>
          <li className="adminLink">
            <Link
              to="/update-profile"
              className="btn"
              color="black"
              // fluid
              size="large"
            >
              Update Profile
            </Link>
          </li>
          <li className="adminLink">
            <Link
              to="/signup"
              className="btn"
              color="black"
              // fluid
              size="large"
            >
              Add Admin
            </Link>
          </li>
          <li className="adminLink">
            <Button color="red" fluid size="large" onClick={handleLogout}>
              Log Out
            </Button>
          </li>
        </ul>
        <div onClick={handleNavLinksToggle} className="hamburger-toggle">
          <i className="bars icon"></i>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav
//We have used Link tags so that page
//will not reload everytime we click a link attached to a route.
//Internally it converts Link into a tag
