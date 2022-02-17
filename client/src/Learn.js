import React from "react";
import moon_logo from "./images/moon-logo-gold.png";
import learn_1 from "./images/learn_1.png";
import learn_2 from "./images/learn_2.png";
import learn_3 from "./images/learn_3.png";

import { Container, Card, Row, Col } from "react-bootstrap";

function Learn() {
  return (
    <Container>
    <h2 className="text-center">Learn</h2>
      <Card className="mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
        <Row className="g-0">
          <Col md={3}>
            <Card.Img className="fluid mx-auto" src={learn_3}></Card.Img>
          </Col>
          <Col className="md-8">
            <Card.Body>
              <Card.Title>How to use a mala</Card.Title>
              <Card.Text>
                <p>
                  A mala is a meditation tool. it's a string of meditation beads
                  - similar to a Christian rosary - that is used to help you
                  lengthen your breath or to repeat a mantra or a prayer as you
                  move your fingers over each bead.
                </p>

                <p>
                  There are 108 beads plus a "guru" bead - the larger bead right
                  before the tassel. The number 108 is long considered a sacred
                  number in Hinduism and yoga. It is the sum of 12 x 9 which are
                  also sacred numbers themselves.
                </p>

                <p>
                  You can wear a mala to help you feel more grounded and
                  balanced throughout your day, or simply because you think it
                  looks rad! You can also use your mala as part of your
                  meditation routine - either taking a deep breath or repeating
                  a mantra as your fingers move across each bead.
                </p>

                <p>How do you meditate? Do you use a mala? </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
        <Row className="g-0">
          <Col md={3}>
            <Card.Img src={learn_2}></Card.Img>
          </Col>

          <Col className="md-8">
            <Card.Body>
              <Card.Title>Why do malas have 108 beads?</Card.Title>
              <Card.Text>
                <p>
                  The number 108 is long considered a sacred number in Hinduism
                  and yoga. It is the sum of 12 x 9 which are also sacred
                  numbers themselves. Malas (the meditation tools I'm obsessed
                  with) have 108 beads plus a "guru" bead - the larger bead
                  right before the tassel.
                </p>
                <p className="fw-bold">So what does 108 signify?</p>
                <p>1 - the number of supreme truth or god consciousness.</p>
                <p>0 - nothing or emptiness.</p>
                <p>
                  8 - represents eternity or infinity. note that the symbol of
                  infinity is obtained by rotating 8 by 90 degrees.
                </p>
                <p>
                  Thus the sacred number 108 tells us that we are at once
                  something, nothing and everything.
                </p>
                <p className="fw-bold">Other fun facts about 108....</p>
                <p>
                  🌀- there are 108 energy lines, or nadis, converging to form
                  the heart chakra
                </p>
                <p>
                  🌀- the diameter of the sun is approximately 108 times that of
                  earth
                </p>
                <p>
                  🌀- the distance from earth to the sun is, on average, 108
                  times the diameter of the sun. 🌀- the average distance from
                  earth to the moon is about 108 times the moon's diameter. 🌀-
                  the official baseballs used in major league baseball have 108
                  double stitches.
                </p>
                <p>
                  🌀- the circle at Stonehenge is about 108 feet in diameter
                </p>
                <p>
                  🌀- in astrology, the metal silver is said to represent the
                  moon. the atomic weight of silver is 107.8682 = 108
                </p>
                <p>
                  🌀- 108 degrees Fahrenheit is the internal temperature at
                  which the vital organs of human body begin to fail from
                  overheating.
                </p>
                <p>🌀- the area of the Vatican city is approx 108 acres</p>
                <p>
                  🌀- there are 12 zodiac signs based on the movement of sun and
                  moon. there are 9 planets whose positions represents the
                  events that will occur in our life. multiplying 12*9, we get
                  108.
                </p>
                <p>...... and the list goes on!</p>
                <p>
                  So grab your mala and breathe in, breathe out, and repeat (108
                  times!) 😊🙂
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
        <Row className="g-0">
          <Col md={3}>
            <Card.Img className="fluid mx-auto" src={learn_1}></Card.Img>
          </Col>
          <Col className="md-8">
            <Card.Body>
              <Card.Title>Choosing a mala</Card.Title>
              <Card.Text>
                <p>
                  Whether you are looking for a mala for yourself or as a gift,
                  take a moment to close your eyes and think about how you want
                  to feel (or how you want the gift recipient to feel).{" "}
                </p>
                <p>
                  Perhaps you seek balance, grounding, loving or calming vibes.
                  Think about that feeling you want to cultivate more of. Then
                  scroll through to see what pops out for you.
                </p>

                <p>
                  When choosing a mala I believe we should go with our first
                  instinct and don't overthink it. Sounds counterintuitive,
                  right? But, usually the stones you are first drawn to have
                  grounding or balancing properties you may want to bring into
                  your meditation practice.
                </p>

                <p>
                  Don't believe me? Just try and see for yourself! Scroll
                  through the designs and see what your eye is drawn to. Then,
                  read about the gemstones and see if they have properties that
                  resonate with you and the vibe you want to cultivate.
                </p>

                <p>
                  Still unsure? Feel free to <a href="/contact">contact me</a>{" "}
                  with any questions and I would be happy to help you.
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Learn;
