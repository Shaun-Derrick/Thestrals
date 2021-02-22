import React, { useRef, useState } from "react"
import { Button, Form, Grid, Segment, Ref } from "semantic-ui-react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (
      passwordRef.current.children[0].value !==
      passwordConfirmRef.current.children[0].value
    )
      return setError("Passwords do not match")

    const promises = []
    setLoading(true)
    setError("")
    if (emailRef.current.children[0].value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.children[0].value))
    }
    if (passwordRef.current.children[0].value) {
      promises.push(updatePassword(passwordRef.current.children[0].value))
    }

    Promise.all(promises)
      .then(() => {
        // history.push("/")
        history.push("/admin")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {/* <Container text style={{ margin: 30}}> */}
      <Grid
        textAlign="center"
        style={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <h2>Update Profile</h2>
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
                  defaultValue={currentUser.email}
                />
              </Ref>
              <Ref innerRef={passwordRef}>
                <Form.Input
                  id="password"
                  control="input"
                  // fluid
                  icon="lock"
                  iconposition="left"
                  placeholder="Leave blank to keep the same password"
                  type="password"
                />
              </Ref>
              <Ref innerRef={passwordConfirmRef}>
                <Form.Input
                  id="password-confirm"
                  control="input"
                  // fluid
                  icon="lock"
                  iconposition="left"
                  placeholder="Leave blank to keep the same password"
                  type="password"
                />
              </Ref>
              <Button
                disabled={loading}
                type="submit"
                color="black"
                // fluid
                size="large"
                style={{ marginBottom: '.5em' }}
              >
                Update
              </Button>
              <Link to="/admin">
                <Button color="black" fluid size="large">Cancel/Return to Admin Console </Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      {/* </Container> */}
    </>
  )
}

export default UpdateProfile
