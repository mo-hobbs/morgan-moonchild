import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
    return (
        <Container >
        <Form>
            <h2>Contact</h2>
            <p>Happy to help and answer any questions</p>
            <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control type="text" className="form-message" placeholder="Message" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Contact;