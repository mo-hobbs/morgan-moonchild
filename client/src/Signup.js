import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [errorState, setErrorState] = useState(null)

  
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
                email          
            }),
            }).then((r) => {
                if (r.ok) {
                r.json().then((user) => {
                onLogin(user)
                setErrorState(null);
                });
            }
            else {
                r.json().then((errors) => {
                console.log(errors)
                setErrorState(errors)
                });
            }
            });
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>Username: </label>
        <input
            type="username"
            id="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label>Password: </label>
        <input
            type="password"
            id="new-password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <label>Confirm Password: </label>
        <input
            type="password"
            id="password_confirmation"
            autoComplete="new-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <label>Full Name: </label>
        <input
            type="fullName"
            id="fullName"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
        />
        <br/>
        <label>Email: </label>
        <input
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        {errorState ? errorState.error.map(e => <p className="error">{e}</p>) : null}
        <Button type="submit" className="signup" variant="dark">Signup</Button>
    </form>
    );
}



export default Signup;

