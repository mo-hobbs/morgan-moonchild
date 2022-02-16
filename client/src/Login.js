import React, { useState } from "react";
import Signup from "./Signup";
import { Button, Row, Container, Form, Col } from "react-bootstrap";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setErrorState(null);
        });
      } else {
        r.json().then((errors) => {
          console.log(errors);
          setErrorState(errors);
        });
      }
    });
  }

  return (
    <>
      <Container class="row justify-content-center">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} className="login-form">
              <h2>Login</h2>

              <Form.Group className="mb-3">
                <Form.Control
                  type="username"
                  id="login-username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="current-password"
                  id="current-password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button className="mb-3" variant="dark" type="submit">
                Login
              </Button>
            </Form>
          </Col>
          <Col class="col-2">
          <h2 class="text-center">OR</h2>
          </Col>
          <Col>
            <Row className="mb-3">
              <Signup onLogin={onLogin} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
