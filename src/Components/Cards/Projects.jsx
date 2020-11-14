import React from "react";

import "./styles.css";

import { CardDeck, Card } from "react-bootstrap";

function CardProjects(props) {
  return (
    <div>
      <CardDeck style={{ marginTop: "180px" }}>
        <Card className="cards">
          <div className="bg__image-project">
            <h3 className="text__projects-title">{props.name}</h3>
            <p className="text__projects-desc">{props.desc}</p>
            <img
              src={props.image}
              alt="images react"
              style={{
                width: "217px",
                height: "232px",
                marginTop: "16px",
                objectFit: "cover",
              }}
            />
          </div>
        </Card>
      </CardDeck>
    </div>
  );
}

export default CardProjects;
