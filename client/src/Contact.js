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

            <Form.Group>
                
            <Form.Select aria-label="Default select example">
                <option>Type of inquiry</option>
                <option value="general-question">General Question</option>
                <option value="wholesale-inquiry">Wholesale Inquiry</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control
                    as="textarea"
                    placeholder="Message"
                    style={{ height: '100px' }}
                />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Contact;