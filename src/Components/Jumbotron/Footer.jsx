import React from "react";

import "./styles.css";
import Linkedin from "../../Images/Linkedin.png";
import Github from "../../Images/github.png";
import Email from "../../Images/E-mail.png";
import Behance from "../../Images/BE.png";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          marginTop: "-330px",
        }}
      >
        <Container style={{ marginLeft: "200px" }}>
          <Row
            style={{
              marginTop: "60px",
              justifyContent: "center",
              marginRight: "120px",
              marginTop: "250px",
            }}
          >
            <Col lg={6}>
              <h5 className="text__footer-sc">Social Media</h5>
              <div className="ul__footer">
                <ul>
                  <li className="li__footer-name">
                    <img
                      src={Email}
                      alt="image email icon"
                      className="icon__footer"
                    />
                    fajarardiyanto@gmail.com
                  </li>
                  <li className="li__footer-name li-2">
                    <img
                      src={Linkedin}
                      alt="image email icon"
                      className="li2"
                    />
                    fajar-ardiyanto
                  </li>
                  <li className="li__footer-name li-3">
                    <img
                      src={Behance}
                      alt="image email icon"
                      className="icon__footer li3"
                    />
                    fajarardiyanto
                  </li>
                  <li className="li__footer-name li-4">
                    <img
                      src={Github}
                      alt="image email icon"
                      className="icon__footer li4"
                    />
                    fajarardiyanto
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <Form className="form__footer">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Control placeholder="Subject" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <Button variant="outline-light" className="btn__Get-Submit">
                  <span> Send Message </span>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
