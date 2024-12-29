import { useState } from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GreetUser from "./components/greet-user/GreetUser.component";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const App = () => {
  const [greeting, setGreeting] = useState("");

  // name is the user input received from GreetUser component
  const handleSayHello = (name) => {
    setGreeting(name);
  };

  return (
    <div className="App">
      {/* TODO: refactor NavBar as component */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="#" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto d-flex" style={{ gap: "10rem" }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-container">
        <GreetUser sayHello={handleSayHello} />
        <div className="result-container">
          {/* Display the result from the server */}
          <h1>{greeting}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
