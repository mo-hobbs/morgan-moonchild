import { React } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductCard2 = props => {
    const { dishes } = props;

    // const mapStateToProps = state => {
    //     return {
    //         dishes: state.myDishes
    //     };
    // };

    return (
        <Container>
            {dishes.length > 0 &&
                dishes.map(d => (
                    <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card key={d.id}>
                        <Card.Img variant="top" src={d.attributes.picture} />
                        <Card.Body>
                        <Card.Title>{d.attributes.name}</Card.Title>
                            <Card.Text>Possibly some text here</Card.Text>
                            <Link to={`/dishes/${d.id}`}>
                                <Button variant="primary">Full Recipe</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
              ))}
        </Container>
    );
};


export default ProductCard2;