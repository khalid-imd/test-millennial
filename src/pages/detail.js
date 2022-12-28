import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";

const Detail = () => {
  const { id } = useParams();

  let { data: products } = useQuery("produccctCache", async () => {
    const response = await API.get("/products/" + id);
    return response.data;
  });

  return (
    <div className="row p-5">
      <div className="col-lg-9 col-md-12 col-sm-12 row">
        <img className="col-5" src={products?.thumbnail} alt="" />
        <div className="col-7">
          <h2 className="mb-3">{products?.title}</h2>
          <h6 className="mb-5">{products?.description}</h6>
          <div className="d-flex justify-content-between">
            <h2>${products?.price}</h2>
            <Button className="w-25">
              <Link to="/cart" className="text-decoration-none text-white">
                Beli
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
