import React, { useState } from "react";
import Signup from "./Signup";
import { Button, Row, Container } from "react-bootstrap";

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
            username, password
        }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                onLogin(user);
                setErrorState(null);
            });
            }
            else {
                r.json().then((errors) => {
                console.log(errors);
                setErrorState(errors);
            });
            }
        });
    }

    return (
        <Container>
        <Row>

        <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label>Username: </label>
        <input
            type="username"
            id="login-username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label>Password: </label>
        <input
            type="current-password"
            id="current-password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        {errorState ? <p className="error">{errorState.error}</p> : null}
        <br/>
        <Button type="submit">Login</Button>
    </form>
    </Row>
        <br/>
        <br/>
        <Row>
            <h4>Don't have an account yet?</h4>
            <Signup onLogin={onLogin} />
        </Row>


    </Container>

    )
}

export default Login;