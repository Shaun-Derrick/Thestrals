import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Button } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"

const AdminNav = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);
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
    navLinkToggle(!navLinkOpen);
  };
  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active"
    }
    return classes;
  };

  return (
    <nav>
      <div>
        <ul className={renderClasses()}>
          <li className="link">
            <Link to="/admin"> HOME</Link>
          </li>
          <li className="link">
            <Link to="/admin/create">CREATE</Link>
          </li>
          <li className="link">
            <Link to="/admin/update">UPDATE</Link>
          </li>
          <li className="link">
            <Link to="/admin/delete">DELETE</Link>
          </li>
          <li className="link">
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
          <li className="link">
            <Link
              to="/signup"
              className="btn"
              color="black"
              // fluid
              size="large"
            >
              Add Admin Account
        </Link>
          </li>
          <li className="link">
            <Button color="green" fluid size="large" onClick={handleLogout}>
              Log Out
        </Button>
          </li>
        </ul>
        <div onClick={handleNavLinksToggle} className="hamburger-toggle">
          <i className="bars icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
//We have used Link tags so that page
//will not reload everytime we click a link attached to a route.
//Internally it converts Link into a tag