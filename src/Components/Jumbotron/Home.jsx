import React from 'react'
import { Jumbotron } from "react-bootstrap";

import NavbarHome from "../Navbar/navbar"

import "./home.css"

function HomeJumbotron() {
    return (
        <div>
            <Jumbotron fluid className="jumbotron__home">
                <NavbarHome />

                <div>
                <h1 className="title__1">
                    <span>Design & Build</span> <br /> Unique Things
                </h1>
                </div>
            </Jumbotron>
        </div>
    )
}

export default HomeJumbotron
