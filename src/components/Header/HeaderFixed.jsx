import React, { Component } from "react";

import "./animation.css"

import { ContainerF, ContainerVisibility, P, Nav, Ul, Li, Btn, Btn2, Logo } from "./styled.jsx"

import logo from "../../assets/img/logo.svg";

function HeaderFixed() {
    return (
        <ContainerF>

            <Logo src={logo} alt="Cyber Supply"/>

            <Nav>
                <Ul>
                    <Li><Btn href="/">Home</Btn></Li>
                    <Li><Btn href="#">About</Btn></Li>
                    <Li><Btn href="#">Contact</Btn></Li>
                </Ul>

                <Ul>
                    <Li><Btn2 href="#">Login</Btn2></Li>
                    <Li><P>/</P></Li>
                    <Li><Btn2 href="/register" > Register</Btn2></Li>
                </Ul>
            </Nav>

        </ContainerF>
    )
}

export default HeaderFixed;
