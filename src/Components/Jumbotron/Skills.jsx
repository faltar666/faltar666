import React from "react";

import "./styles.css";

import DataTrip from "../../FakeData/skills";

import CardSkills from "../Cards/Skills";
import { Col, Container, Row } from "react-bootstrap";

function Skills() {
  let cards = DataTrip.map((val) => {
    return (
      <Col lg={3} style={{ marginBottom: "40px" }}>
        <CardSkills Image={val.image} percent={val.percent} name={val.name} />
      </Col>
    );
  });
  return (
    <div>
      <Container>
        <h1 className="title__services">Skills</h1>
        <Row className="row__skills">{cards}</Row>
      </Container>
    </div>
  );
}

export default Skills;
