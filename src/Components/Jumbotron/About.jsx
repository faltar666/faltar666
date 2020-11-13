import React from "react";

import "./styles.css";
import Photo from "../../Images/malicki.jpg";

import { Col, Container, Row, Jumbotron, Button } from "react-bootstrap";

function AboutHome() {
  return (
    <div>
      <Jumbotron fluid className="jumbotron__about">
        <Container>
          <Row>
            <Col sm={6}>
              <img src={Photo} alt="Photo-Studio" className="photo__about" />
            </Col>
            <Col sm={6}>
              <h3>About Me</h3>
              <Button variant="outline-light" className="btn__Get-Touch">
                <span> Download CV </span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default AboutHome;
