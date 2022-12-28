import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../index.css";

const Cart = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="row p-5">
      <div className="col-6">
        <div className="mb-4 d-flex justify-content-center">
          <div className="me-4">
            <Form.Check aria-label="option 1" />
          </div>
          <div className="row border border-dark p-3">
            <img
              className="col-5"
              src="https://cdn.antaranews.com/cache/800x533/2020/03/17/shutterstock_1526498756.jpg"
              alt=""
            />
            <div className="col-7">
              <div className="d-flex justify-content-between">
                <h4 className="mb-3">Iphone 9</h4>
                <div className="hover">
                  <RiDeleteBin6Line onClick={""} />
                </div>
              </div>
              <h4 className="mb-5">Rp. 9.000.000</h4>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <h4 className="hover" onClick={() => setCount(count - 1)}>
                    {" "}
                    -{" "}
                  </h4>
                  <h4 className="mx-4">{count}</h4>
                  <h4 className="hover" onClick={() => setCount(count + 1)}>
                    +
                  </h4>
                </div>
                <h4>Rp. {count * 9000000}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <h1>Total</h1>
          <div>
            <h1 className="mb-3">Rp. 9.000.000</h1>
            <Button className="w-100">Beli</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
