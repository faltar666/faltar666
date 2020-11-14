import React from "react";

import CardProjects from "../Cards/Projects";
import DataProjects from "../../FakeData/projects";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  let projects = DataProjects.map((val) => {
    return (
      <Col lg={3} style={{ marginBottom: "20px" }}>
        <CardProjects image={val.image} name={val.name} desc={val.desc} />
      </Col>
    );
  });
  return (
    <>
      <h1 className="title__services top__projects" style={{ color: "#fff" }}>
        Projects
      </h1>
      <div style={{ backgroundColor: "#000", marginTop: "-160px" }}>
        <Container>
          <Row style={{ marginTop: "60px", justifyContent: "center" }}>
            {projects}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
