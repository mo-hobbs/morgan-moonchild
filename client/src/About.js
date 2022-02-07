import React from "react";
import wood_malas from "./images/wood_malas.jpg";

import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <div>
            <h1 className="myStyle" >About</h1>
            <Container>
                <Row>
                    <Col>
                        <h1>Left Title</h1>
                    </Col>
                    <Col>
                        <h1>Right Title</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                        <img className="wood_malas" src={wood_malas} alt="three mala necklaces made with different types of wood: red sandalwood, cedar, and brown sandalwood" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                        <h2>Welcome</h2>

                        <p>Now that you are here take a deep breath in and a long exhale.<p/>

                        <p>
                        A mala, or japa mala, is a string of meditation beads. it is similar to a Christian rosary and it is used to help you lengthen your breath or to repeat a mantra, intention, or a prayer as you move your fingers over each bead. You can wear a mala to help you feel more grounded and balanced, or simply because you think it looks rad! 
                        </p>

                        <p>
                        Whether you are looking for a mala for yourself or as a gift, take a moment to close your eyes and think about how you want to feel (or how you want the gift recipient to feel). Perhaps you seek balance, grounding, loving, or calming vibes. think about that feeling you want to cultivate more of. Then scroll through to see what pops out for you. when choosing a mala I believe we should go with our first instinct and don't overthink it. Usually the stones you are first drawn to have grounding or balancing properties you may want to bring into your meditation practice. 
                        </p>

                        <p>
                        I love to help people create custom and uniquely personalized malas. Feel free to send me a message if you want to learn more about how we can make a unique combination of gemstones to help you raise your vibe in your meditation practice. 
                        </p>

                        <p>
                        If you have questions about how to use a mala, how to care for your mala, or about personalizing a mala please see the FAQ section. 
                        </p></p>
                    </div>
                </Col>
                </Row>

                <Row>
                    <Col>
                        <h1>Left Title</h1>

                    </Col>
                    <Col>
                        <h1>Right Title</h1>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About;

