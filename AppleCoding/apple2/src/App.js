/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import data from "./data";

function App() {
  const [shoes, setShoes] = useState(data);
  console.log("데이터", shoes);
  const wxy = [
    { id: 123, content: "ㅁㄴㅇ" },
    { id: 133, content: "ㅁㄴㅇ2" },
    { id: 143, content: "ㅁㄴㅇ3" },
    { id: 153, content: "ㅁㄴㅇ4" },
    { id: 153, content: "ㅁㄴㅇ5" },
    { id: 2, content: "ㅁㄴㅇ6" },
  ];
  console.log(data);
  wxy.filter((a) => {
    data.map((b) => {
      console.log("에이", a);
      console.log("비", b);
      if (a.id === b.id) {
      }
    });

    return;
  });
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="back">
        <h1> Hello </h1>
        <Button variant="dark">Dark</Button>{" "}
      </div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            console.log("a", a);
            return (
              <div key={i} className="col-md-4">
                <img
                  src={
                    "https://codingapple1.github.io/shop/shoes" +
                    (i + 1) +
                    ".jpg"
                  }
                  width="100%"
                />
                <h4>{shoes[i].title}</h4>
                <p>
                  {" "}
                  {shoes[i].content} & {shoes[i].price}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
