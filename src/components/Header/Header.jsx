import React, { Component } from "react";

import "./animation.css"

import { ContainerH, ContainerVisibility, P, Nav, Ul, Li, Btn, Btn2, Logo } from "./styled.jsx"

import logo from "../../assets/img/logo.svg";

function Header() {
    return (
        <ContainerH>

            <ContainerVisibility id="head"/>

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

        </ContainerH>
    )
}

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 100,
    headerEl = document.getElementById('head');
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("black");
    } else {
      headerEl.classList.remove("black");
    }
  }
  
  window.addEventListener('scroll', resizeHeaderOnScroll);
  

function fixedHeader() {
    const location = window.location.pathname
    headerEl = document.getElementById('head');

    if(location === '/register') {
        headerEl.classList.add("fixed");
    } else {
        headerEl.classList.remove("fixed");
    }
}

export default Header;