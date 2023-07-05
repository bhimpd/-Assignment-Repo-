import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const CardDetails = () => {
  const { id } = useParams(); // Retrieve the id parameter from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details based on the ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { rating, title, price, category, description, image } = product;

  return (
    <div>
      <div className="container-fluid bread">
        <div className="container py-2">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>
              <h6 className="proname">{title}</h6>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 py-4 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={image} alt={title} />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <hr />
            <p>
              Rating: {rating.rate} (out of {rating.count})
            </p>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CardDetails;
