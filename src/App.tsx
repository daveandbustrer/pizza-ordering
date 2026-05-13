import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  ToastContainer,
} from "react-bootstrap";
import "./App.sass";
import { Confirm } from "./componets/Confirm";
import PizzaCard from "./componets/PizzaCard";
import pizzas from "./data.json";
const initialState = pizzas.map(() => ({
  name: "",
  visible: false,
}));

function App() {
  const [ordered, setOrdered] = useState(initialState);

  function display_confirm(name: string, id: number) {
    setOrdered((prev) => {
      const copy = [...prev];
      copy[id - 1] = { name, visible: true };
      return copy;
    });

    setTimeout(() => {
      setOrdered((prev) => {
        const copy = [...prev];
        copy[id - 1].visible = false;
        return copy;
      });
    }, 3000);
  }

  return (
    <>
      <div className="z-3 position-fixed">
        <Navbar className="bg-body-primary">
          <Container>
            <NavbarBrand>
              <a href="#">Atomic Pizza</a>
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
      <div>
        <Container>
          <Row xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"}>
            <img src="atomic pizza colored logo.png" alt="atomic pizza logo" />
          </Row>
        </Container>
      </div>
      <ToastContainer position="top-start" className="p-3">
        <div className="z-3 position-fixed pt-5">
          {ordered.map(
            (item, index) =>
              item.visible && (
                <Confirm
                  key={index}
                  id={index}
                  name={item.name}
                  toggle={() => {
                    setOrdered((prev) => {
                      const copy = [...prev];
                      copy[index].visible = false;
                      return copy;
                    });
                  }}
                />
              ),
          )}
        </div>
      </ToastContainer>

      <Container className="z-1 position-absolute pt-5 start-50 translate-middle-x w-100">
        <Row className="justify-content-evenly">
          {pizzas.map((data) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5" key={data.id}>
              <PizzaCard data={data} setOrdered={display_confirm} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
