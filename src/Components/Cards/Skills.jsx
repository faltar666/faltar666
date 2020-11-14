import React from "react";

import "./styles.css";

import { Card, CardDeck } from "react-bootstrap";
import Circle from "react-circle";

function CardSkills(props) {
  return (
    <CardDeck>
      <Card className="cards">
        <div className="bg__image">
          <img
            src={props.Image}
            alt="images react"
            style={{
              width: "124px",
              height: "103px",
              marginTop: "40px",
              objectFit: "fit",
            }}
          />
          <div style={{ marginTop: "50px" }}>
            <Circle progress={props.percent} size={75} animate={true} />
          </div>
          <h3 className="name__card">{props.name}</h3>
        </div>
      </Card>
    </CardDeck>
  );
}

export default CardSkills;
