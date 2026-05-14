import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "react-bootstrap";
import "./App.sass";
import HomePage from "./componets/home";

function App() {
  return (
    <>
      <Navbar
        className="navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container fluid>
          <NavbarBrand>
            <NavLink>
              <img src="pizza.png" alt="" />
            </NavLink>
          </NavbarBrand>
          <NavbarToggle
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </Container>
        <Container>
          <NavLink></NavLink>
        </Container>
      </Navbar>
      <HomePage />
    </>
  );
}

export default App;
