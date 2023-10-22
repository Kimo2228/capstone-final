import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <Nav className={Styles["navigation"]}>
      <>
        <Navbar className={Styles["nav"]}>
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className={Styles["nax"]}>
              <Nav.Link as={Link} to={"/home"}>
                <ul>
                  <li>Home</li>
                </ul>
              </Nav.Link>

              <Nav.Link as={Link} to={"/characters"}>
                <ul>
                  <li>Characters</li>
                </ul>
              </Nav.Link>
              <Nav.Link as={Link} to={"/houses"}>
                <ul>
                  <li> Houses</li>
                </ul>{" "}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </Nav>
  );
}

export default NavigationBar;
