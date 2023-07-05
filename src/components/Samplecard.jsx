import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./component.css";

const Samplecard = ({ user, handleCardClick }) => {
  // goto details page on clicking the card
  const navigate = useNavigate();

  const handleClick = (curUser) => {
    handleCardClick(curUser);
    navigate(`/details/${curUser.id}`);
  };

  return (
    <div className="container">
      <div className="row">
        {user.map((curUser, index) => {
          const { image, title, price } = curUser;

          return (
            <div className="col-md-4 keycard" key={index}>
              <Card
                style={{ width: "18rem" }}
                className="mb-3"
                onClick={() => handleClick(curUser)}
              >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>Price : ${price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Samplecard;
