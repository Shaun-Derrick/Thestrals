import React, { useRef, useState } from "react"
import { Button, Form, Grid, Segment, Ref } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(
      "hello world",
      emailRef.current.children[0].value,
      passwordRef.current.children[0].value
    )
    try {
      setError("")
      setLoading(true)
      await login(
        emailRef.current.children[0].value,
        passwordRef.current.children[0].value
      )
      // Will bring us to the dashboard page because the exact route has been declared in the app component
      history.push("/admin")
    } catch {
      setError("Failed to sign in")
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
              <h2>Admin Log In</h2>
              {/* Change to a div element or get guidance on how to use the error prop from semantic */}
              {error && <div>{error}</div>}
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
              <Ref innerRef={passwordRef}>
                <Form.Input
                  id="password"
                  control="input"
                  // fluid
                  icon="lock"
                  iconposition="left"
                  placeholder="Password"
                  type="password"
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
                Log In
              </Button>
              <Button color="black" fluid size="large">
                <Link to="/forgot-password">Forgot Password?</Link>
              </Button>

              <Button color="black" fluid size="large">
                <Link to="/">Return to Public Home Page</Link>
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      {/* </Container> */}
    </>
  )
}

export default Login
