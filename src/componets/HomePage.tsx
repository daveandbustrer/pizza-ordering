import { Col, Container, Row } from "react-bootstrap";
function HomePage() {
  return (
    <>
      <header>
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
      </header>
      <main>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-1">
                <u>
                  <strong>Atomic Pizza website</strong>
                </u>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>this is an example text</h5>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default HomePage;
