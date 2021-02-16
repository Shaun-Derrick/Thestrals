import React, { useRef, useState } from "react"
import { Button, Form, Grid, Segment, Ref } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(
      "hello world",
      emailRef.current.children[0].value,
      passwordRef.current.children[0].value,
      passwordConfirmRef.current.children[0].value
    )
    if (
      passwordRef.current.children[0].value !==
      passwordConfirmRef.current.children[0].value
    )
      return setError("Passwords do not match")

    try {
      setError("")
      setLoading(true)
      await signup(
        emailRef.current.children[0].value,
        passwordRef.current.children[0].value
      )
      history.push("/")
    } catch {
      setError("Failed to create an account")
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
              <h2>Add Additional Administrators</h2>
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
              <Ref innerRef={passwordConfirmRef}>
                <Form.Input
                  id="password-confirm"
                  control="input"
                  // fluid
                  icon="lock"
                  iconposition="left"
                  placeholder="Password-Confirmation"
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
                Sign Up
              </Button>
              <Button color="black" fluid size="large">
                <Link to="/admin">Return to Admin Console</Link>
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      {/* </Container> */}
    </>
  )
}

export default Signup