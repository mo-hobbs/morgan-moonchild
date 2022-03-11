import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
  const [errorState, setErrorState] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry_type, setInquiryType] = useState("General Question");
  const [message, setMessage] = useState("");

  //add function to display a successful contact submission

  function handleChange(e) {
    setInquiryType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if user is logged in pass their user_id to contact foreign key
    fetch(`/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        inquiry_type,
        message,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setErrorState(null);
        });
      } else {
        r.json().then((errors) => {
          setErrorState(errors);
        });
      }
    });
  }

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <h2>Contact</h2>
        <p>Happy to help and answer any questions</p>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option value="Inquiry Type" onChange={handleChange}>
              Type of inquiry
            </option>
            <option value="General Question">General Question</option>
            <option value="Wholesale Inquiry">Wholesale Inquiry</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
        {errorState
          ? errorState.error.map((e) => (
              <p class="error" style={{ color: "red" }}>
                {e}
              </p>
            ))
          : null}
      </Form>
    </Container>
  );
}

export default Contact;
