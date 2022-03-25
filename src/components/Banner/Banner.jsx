import React, { Component } from "react";
import "./style.css";
import { GreatTitle, SubTitle, Container, Gradient } from "./styled.jsx";
import name from "../../assets/img/name.svg"

function Banner() {
        return (
            <Container>
            <GreatTitle src={name}/>
            <SubTitle>So your code fly higher</SubTitle>
            <Gradient></Gradient>
            </Container>
        )
}

export default Banner;