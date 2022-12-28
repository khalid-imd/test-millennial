import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h6 onClick={handleShow}>Register</h6>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="masukan nama lengkap anda"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="masukan username anda"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="masukan sandi anda"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Konfirmasi sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="ketik ulang sandi anda"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ke halaman login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
