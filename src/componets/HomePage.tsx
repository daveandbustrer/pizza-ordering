import { Col, Container, Row } from "react-bootstrap";
function HomePage() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="align-item-center">
            <img
              src="atomic pizza colored logo.png"
              alt="atomic pizza logo"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1>Atomic Pizza website</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
