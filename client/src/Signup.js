import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errorState, setErrorState] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // users/create route
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        fullName,
        email,
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
    <Form onSubmit={handleSubmit} className="login-form mb-3">
      <h2>Signup</h2>

      <Form.Group className="mb-3">
        <Form.Control
          type="username"
          id="signup-username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          id="signup-password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          id="password_confirmation"
          autoComplete="new-password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm password"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="fullName"
          id="fullName"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </Form.Group>
      {errorState
        ? errorState.error.map((e) => <p className="error">{e}</p>)
        : null}
      <Button type="submit" className="signup" variant="dark">
        Signup
      </Button>
    </Form>
  );
}

export default Signup;
