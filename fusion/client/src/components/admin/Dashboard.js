import React, { useState } from "react"
import { Button, Segment } from "semantic-ui-react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")
    try {
      await logout()
    } catch {
      setError("Failed to log out")
      history.push("/login")
    }
  }
  return (
    <>
      <div style={{ color: "white" }}>Dashboard</div>
      <Segment stacked>
        <Segment stacked>
          <h2>Profile</h2>
          {error && <div>{error}</div>}
          <strong> Email:</strong> {currentUser.email}
        </Segment>
        <Segment stacked>
          <Link
            to="/update-profile"
            className="btn"
            color="black"
            // fluid
            size="large"
          >
            Update Profile
          </Link>
        </Segment>
      </Segment>
      <Button color="black" fluid size="large" onClick={handleLogout}>
        Log Out
      </Button>
    </>
  )
}
