import React from "react";

import FE from "../../Images/laptop.png";
import CD from "../../Images/canvas.png";
import WS from "../../Images/web service.png";

import { Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const arrowRight = (
    <FontAwesomeIcon icon={faArrowCircleRight} style={{ color: "#BDBDBD" }} />
  );
  return (
    <div>
      <Container>
        <h1 className="title__services">Services</h1>
        <div className="border__services"></div>
        <div className="border__services2"></div>
        <Row className="row__services">
          <Col lg={4}>
            <Card className="card__services">
              <Card.Body>
                <img
                  src={FE}
                  alt="image-web-development"
                  className="img__card-service"
                />
                <Card.Title className="card__services-title">
                  Web Development
                </Card.Title>
                <Card.Text className="card__services-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {arrowRight}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="card__services">
              <Card.Body>
                <img
                  src={CD}
                  alt="image-web-development"
                  className="img__card-service"
                />
                <Card.Title className="card__services-title">
                  Creative Design
                </Card.Title>
                <Card.Text className="card__services-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {arrowRight}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="card__services">
              <Card.Body>
                <img
                  src={WS}
                  alt="image-web-development"
                  className="img__card-service"
                />
                <Card.Title className="card__services-title">
                  Web Services
                </Card.Title>
                <Card.Text className="card__services-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {arrowRight}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
