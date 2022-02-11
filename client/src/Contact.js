import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
    const [errorState, setErrorState] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        inquiry_type: "",
        message: "",
    })

    console.log(formData);

    function handleChange(e) {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        });
        localStorage["{e.target.name}"] = e.target.value;
        console.log(localStorage)
    }

    //add function to display a successful contact submit 

    function handleSubmit(e) {
        e.preventDefault();
        // if user is logged in pass their user_id to contact foreign key
        fetch(`/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData, 
            }),
            }).then((r) => {
                if (r.ok) {
                r.json()
                .then((data) => {
                console.log(data);
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
        <Container >
        <Form>
            <h2>Contact</h2>
            <p>Happy to help and answer any questions</p>
            <Form.Group className="mb-3" >
                <Form.Control 
                type="text" 
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Your name" />

            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                
            <Form.Select aria-label="Default select example">
                <option
                 name="inquiry_type"
                >Type of inquiry</option>
                <option 
                value={formData.inquiry_type}
                onSelect={(e) => handleChange(e.target.value)}
                >General Question</option>
                <option 
                value={formData.inquiry_type}
                onSelect={(e) => handleChange(e.target.value)}
                >Wholesale Inquiry</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control
                    as="textarea"
                    value={formData.message}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Message"
                    style={{ height: '100px' }}
                />
            </Form.Group>

            <Button variant="dark" type="submit" onSubmit={(e)=>handleSubmit(e)}>
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Contact;