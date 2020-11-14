import React from "react";

import "./styles.css";

import NavbarHome from "../Navbar/navbar";
import { Jumbotron, Button } from "react-bootstrap";

function HomeJumbotron() {
  return (
    <div>
      <NavbarHome />
      <Jumbotron fluid className="jumbotron__home">
        <div>
          <h1 className="title__1">
            <span>Design & Build</span>
            <br />
            Unique Things
          </h1>
          <Button variant="outline-light" className="btn__Get-Touch">
            <span> Get Touch Me </span>
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
}

export default HomeJumbotron;
