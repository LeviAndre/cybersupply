import React, { Component } from "react";

import "./animation.css"

import { ContainerH, ContainerVisibility, P, Nav, Ul, Li, Btn, Btn2, Logo } from "./styled.jsx"

import logo from "../../assets/img/logo.svg";

function Header() {
    return (
        <ContainerH>

            <ContainerVisibility className="backdrop"/>

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
                    <Li><Btn2 href="/register" >Register</Btn2></Li>
                </Ul>
            </Nav>

        </ContainerH>
    )
}

// // Get Scroll Position
// let prlx = document.getElementById("prlx");

// prlx.onscroll = function prlxAnimation() {
//  let scrollPos = prlx.scrollTop;
//  let header = document.getElementById("backdrop");
//  // document.getElementById ("pos").innerHTML = y + "px"
 
//  if(scrollPos > 10){
//         header.classList.add("black");
//     }
//     else {
//         header.classList.remove("black");
//     }
 
// }

export default Header;