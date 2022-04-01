import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import { ContainerH, P, Nav, Ul, Li, Btn, Btn2, Logo } from "./styled.jsx"


function Header() {
        return (
                <ContainerH className=".js-header">

                    <Logo src={logo} alt="Cyber Supply"/>

                    <Nav>
                        <Ul>
                            <Li><Btn>Home</Btn></Li>
                            <Li><Btn>About</Btn></Li>
                            <Li><Btn>Contact</Btn></Li>
                        </Ul>

                        <Ul>
                            <Li><Btn2>Login</Btn2></Li>
                            <Li><P>/</P></Li>
                            <Li><Btn2 href="/register" >Register</Btn2></Li>
                        </Ul>
                    </Nav>

                </ContainerH>
        )
}

export default Header;