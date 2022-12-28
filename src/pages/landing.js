import React from "react";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import "../index.css";

const Landing = () => {
  const navigate = useNavigate();

  let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data;
  });
  return (
    <div className="p-5 row ">
      {products?.products.map((item) => {
        return (
          <div className="col-lg-2 mb-4 col-sm-12 col-md-6">
            <Card
              className="hover"
              onClick={() => navigate("/detail/" + item.id)}
              style={{ height: "300px" }}
            >
              {/* <Link to="/detail" className="text-decoration-none text-black"> */}
              <Card.Img variant="top" height={"175px"} src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
              </Card.Body>
              {/* </Link> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
