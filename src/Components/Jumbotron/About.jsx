import React from "react";

import "./styles.css";
import Photo from "../../Images/dsaaaaa.png";

import { Col, Container, Row, Jumbotron, Button } from "react-bootstrap";

function AboutHome() {
  return (
    <div>
      <Jumbotron fluid className="jumbotron__about">
        <Container>
          <Row>
            <Col sm={6}>
              <img
                src={Photo}
                alt="image-Photo-Studio"
                className="photo__about"
              />
            </Col>
            <Col sm={6}>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "50px",
                  marginTop: "100px",
                }}
              >
                <h3 className="text__about">
                  About <span>Me</span>
                </h3>
                <p className="desc__about">
                  I'am Fullstack Developer but prefer to Front End. Apart from
                  programming I also have design skills. I'm interested in
                  programming because it's full of challenges
                </p>
                <Button variant="outline-light" className="btn__Get-Touch">
                  <span> Download CV </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default AboutHome;
