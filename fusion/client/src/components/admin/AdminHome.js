import React, { useState } from "react"
import Logo from "../Logo"
import AdminNav from "./AdminNav"
import AdminText from "./AdminText"
import "../../stylesheets/admin.css"
import { Link, useHistory } from "react-router-dom"
import { Button, Segment } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"

const AdminHome = () => {
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

  return (
    <div className="adminPage">
      <AdminNav />
      <Logo />
      <AdminText />
      <Segment>
        <Button color="green" fluid size="large" onClick={handleLogout}>
          Log Out
        </Button>
        <Link
          to="/update-profile"
          className="btn"
          color="black"
          // fluid
          size="large"
        >
          Update Profile /
        </Link>
        <Link
          to="/signup"
          className="btn"
          color="black"
          // fluid
          size="large"
        >
          / Sign up Additional Admin Accounts /
        </Link>
        <Link
          to="/dashboard"
          className="btn"
          color="black"
          // fluid
          size="large"
        >
          / Dashboard
        </Link>
      </Segment>
    </div>
  )
}

export default AdminHome
