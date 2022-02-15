import React from "react";
import wood_malas from "./images/wood_malas.jpg";
import owner_photo_1 from "./images/owner-photo-1.jpg";


import { Container, Row, Col, Button, Stack, Accordion } from 'react-bootstrap';

function About() {

    return (
        <Container >

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
            </Container>

            <Container >
            <Row>
                <Col>
                    <h2>About the Owner</h2>
                    <p>Morgan Moonchild is a one woman small business. I am based in a home studio in Washington, D.C. I am passionate about yoga, meditation, health, and wellness. I began creating malas after completing a 200-hour Yoga Teacher Training in Goa, India in 2019. I started selling malas in March 2020 at the beginning of the pandemic to help others find calm and balance.
                    </p>
                    <p>
                    I use all natural, genuine gemstones. Most stones are grade AAA - the highest quality rating for gemstones and crystals. All items are designed and hand knotted in my home studio with sustainability in mind.</p>
                </Col>
                <Col>
                    <img className="about_photos" src={owner_photo_1} alt="photograph of the shop owner" />
                </Col>
            </Row>
            </Container>

            <Container >
                <h2>FAQs</h2>

            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Custom and personalized orders
                    </Accordion.Header>
                <Accordion.Body>
                I would be happy to work with you to create a custom designed mala using the stones, cord, and tassel colors of your choice! <a href="/contact" >Contact me</a> to discuss details and pricing.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                <Accordion.Header>Care Instructions</Accordion.Header>
                <Accordion.Body>
                Malas are handmade and knotted in my home studio. A mala is a special (and some might say sacred) meditation tool. I want you to love and use your mala often in your meditation practice and feel comfortable in it’s craftsmanship to wear it every day. I recommend that you keep your mala in the bag provided when not in use. I don’t recommend hanging your mala as it can create unnecessary wear on the cord. Feel free to get your mala wet while running joyfully through the rain, but don’t wear it in the pool or shower.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header>Repairs</Accordion.Header>
                <Accordion.Body>
                <p>Some say that a broken mala represents a broken cycle. It is traditionally viewed as a sign of good luck. Some folks get sad at the thought of endings, but endings also represent new beginnings. A broken mala symbolizes spiritual growth. Perhaps the intention you set for it may be completed or you are in a different place in your life and you may need new energy and intentions. Some say that means you don’t “need” that mala anymore.</p>
                
                
                <p>If these ideas on broken malas don't resonate with you and you want to arrange for repair I'd be glad to help. I’ll will work with you on the repair cost depending on your needs. We could add new stones to bring in some different energies or make other design changes to make it "new" again.</p>
                </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="3">
                <Accordion.Header>Wholesale availability</Accordion.Header>
                <Accordion.Body>
                <p>If you are interested in wholesale or bulk ordering please <a href="/contact" >contact me</a>. I love to collaborate and would be glad to work with you.</p>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
    
            <Container >
                <h2>Shop Policies</h2>

            <Accordion  flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Processing time
                    </Accordion.Header>
                <Accordion.Body>
                In stock items ship within 1-3 days.  Made to order items take 2-4 weeks for processing.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                <Accordion.Header>Shipping</Accordion.Header>
                <Accordion.Body>
                Orders are shipped with a tracking number via USPS priority mail. They usually estimate 7-10 days for shipping time.  
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header>Returns & Exchanges</Accordion.Header>
                <Accordion.Body>
                <p>I gladly accept returns and exchanges</p>
                    <ul>
                        <li>Contact me within: 14 days of delivery</li>
                        <li>Ship items back within: 30 days of delivery</li>
                    </ul>

                <p>Custom malas or personalized orders can't be returned or exchanged.</p>
                <p>Because of the nature of these items, unless they arrive damaged or defective, I can't accept returns for custom or personalized orders.</p>

                <p>Conditions of return</p>
                <p>Buyers are responsible for return shipping costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value.</p>

                </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            </Container>

            <Container  >
            <Stack className="col-md-2 mx-auto">
                <Button className="button-style" size="md" href="/shop" variant="dark" >View Malas</Button>
            </Stack>
            </Container>

        </Container>
    )
}

export default About;

