import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.sass";

import { Col, Container, Row } from "react-bootstrap";
import { Confirm } from "./componets/Confirm";
import PizzaCard from "./componets/PizzaCard";
import pizzas from "./data.json";

function App() {
  const [ordered, setOrdered] = useState(false);

  function display_confirm() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }
  return (
    <>
      <div className="z-3">{ordered && <Confirm toggle={setOrdered} />}</div>
      <Container className="z-1 position-fixed left-corner-100">
        <Row>
          {pizzas.map((data) => (
            <Col xs={3} className="mb-5" key={data.id}>
              <PizzaCard data={data} setOrdered={display_confirm} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
