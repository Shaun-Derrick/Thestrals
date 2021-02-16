import React, { useRef, useState } from "react"
import { Button, Form, Grid, Segment, Ref } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("hello world", emailRef.current.children[0].value)
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.children[0].value)
      setMessage("Check your inbox for further instructions")
      // Will bring us to the dashboard page because the exact route has been declared in the app component
    } catch {
      setError("Failed to reset password")
    }
    setLoading(false)
  }

  return (
    <>
      {/* <Container text style={{ margin: 30}}> */}
      <Grid
        textAlign="center"
        style={{ height: "35vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <h2>Password Reset</h2>
              {/* Change to a div element or get guidance on how to use the error prop from semantic */}
              {error && <div>{error}</div>}
              {message && <div>{message}</div>}
              <Ref innerRef={emailRef}>
                <Form.Input
                  id="email"
                  control="input"
                  // fluid
                  icon="user"
                  iconposition="left"
                  placeholder="E-mail address or Username"
                  type="email"
                  // ref={emailRef}
                  required
                />
              </Ref>
              <Button
                disabled={loading}
                type="submit"
                color="black"
                // fluid
                size="large"
              >
                Reset Password
              </Button>
              <Button color="black" fluid size="large">
                <Link to="/login">Log In?</Link>
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      {/* </Container> */}
    </>
  )
}

export default ForgotPassword