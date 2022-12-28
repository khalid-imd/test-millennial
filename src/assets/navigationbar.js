import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Login from "./login";
import Profile from "./profile";

const Navigationbar = () => {
  return (
    <div>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link className="text-decoration-none text-black" to="/">
              Millennia Shop
            </Link>
          </Navbar.Brand>
          <Navbar.Brand className="d-flex">
            <Nav.Link className="px-3">
              <Link className="text-decoration-none text-black" to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Profile />
            </Nav.Link>
          </Navbar.Brand>
          {/* <Navbar.Brand>
            <Login />
          </Navbar.Brand> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
