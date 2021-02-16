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
      <AdminNav/>
      <Logo/>
       <AdminText />
       <div className="admin-portal-display">
        <p>Your Fusion administration console</p>
        <p>create, update and delete Fuzes</p>
        <p>from here</p>
      </div>
    </div>
  )
}

export default AdminHome
