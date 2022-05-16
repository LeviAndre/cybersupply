import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css"

import { ContainerF, ContainerVisibility, P, Nav, Ul, Li, Btn, Btn2, Logo } from "./styled.jsx"

import logo from "../../assets/img/logo.svg";

function HeaderFixed() {
    return (
        <ContainerF>

            <Logo src={logo} alt="Cyber Supply"/>

            <Nav>
                <Ul>
                    <Li><Link to="/" className="buttonStyle">Home</Link></Li>
                    <Li><Link to="#" className="buttonStyle">About</Link></Li>
                    <Li><Link to="#" className="buttonStyle">Contact</Link></Li>
                </Ul>

                <Ul>
                    <Li><Link to="#" className="buttonSecondary">Login</Link></Li>
                    <Li><P>/</P></Li>
                    <Li><Link to="/register" className="buttonSecondary"> Register</Link></Li>
                </Ul>
            </Nav>

        </ContainerF>
    )
}

export default HeaderFixed;
