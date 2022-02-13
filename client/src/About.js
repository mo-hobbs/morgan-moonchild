import React from "react";
import wood_malas from "./images/wood_malas.jpg";
import owner from "./images/owner-photo.jpeg";
import owner_photo_1 from "./images/owner-photo-1.jpg";
import owner_photo_2 from "./images/owner-photo-2.jpg";
import owner_photo_3 from "./images/owner-photo-3.jpg"

import { Container, Row, Col, Button, Stack } from 'react-bootstrap';

function About() {

    return (
        <Container>
            <Row >
                <Col>
                    <img className="about_photos" src={wood_malas} alt="three mala necklaces made with different types of wood: red sandalwood, cedar, and brown sandalwood" />
                </Col>
                <Col>
                    <h2>Welcome</h2>
                    <p>Now that you are here take a deep breath in and a long exhale.<p/>
                    <p>
                    A mala, or japa mala, is a string of meditation beads. it is similar to a Christian rosary and it is used to help you lengthen your breath or to repeat a mantra, intention, or a prayer as you move your fingers over each bead. You can wear a mala to help you feel more grounded and balanced, or simply because you think it looks rad! 
                    </p>
                    <p>
                    Whether you are looking for a mala for yourself or as a gift, take a moment to close your eyes and think about how you want to feel (or how you want the gift recipient to feel). Perhaps you seek balance, grounding, loving, or calming vibes. think about that feeling you want to cultivate more of. Then scroll through to see what pops out for you. when choosing a mala I believe we should go with our first instinct and don't overthink it. Usually the stones you are first drawn to have grounding or balancing properties you may want to bring into your meditation practice. 
                    </p>
                    <p>
                    If you have questions about how to use a mala, how to care for your mala, or about personalizing a mala please see the FAQ section. 
                    </p></p>
            </Col>
            </Row>

            <Stack className="col-md-2 mx-auto">
                <Button size="md" href="/shop" variant="dark" >Shop Now</Button>
            </Stack>
            <Row>

            </Row>

            <Row>
                <Col>
                    <h2>About the Owner</h2>
                    <p>Morgan Moonchild is a one woman small business. I am based in a home studio in Washington, D.C. I am passionate about yoga, meditation, health, and wellness. I began creating malas after completing a 200-hour Yoga Teacher Training in Goa, India. I began selling malas at the beginning of the pandemic in 2020.
                    </p>
                    <p>
                    I use all natural, genuine gemstones. Most stones are grade AAA - the highest quality rating for gemstones and crystals. All items are designed and hand knotted in my home studio with sustainability in mind.</p>
                </Col>
                <Col>
                    <img className="about_photos" src={owner_photo_1} alt="photograph of the shop owner" />
                </Col>
            </Row>
        </Container>
    )
}

export default About;

