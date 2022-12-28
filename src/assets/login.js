import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { RiLoginBoxLine } from "react-icons/ri";
import Register from "./register";
import "../index.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <RiLoginBoxLine onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="masukan username anda"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="masukan sandi anda"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div className="hover">
            <Register />
          </div>
          <Button variant="primary" onClick={handleClose}>
            Masuk
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
