import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css"

import About from "./About.jsx"
import { ContainerH, ContainerVisibility, P, Nav, Ul, Li, Btn, Btn2, Logo } from "./styled.jsx"

import logo from "../../assets/img/logo.svg";

function Header() {
    return (
        <ContainerH>

            {/* <About /> */}

            <ContainerVisibility id="head"/>

            <Logo className="col-1" src={logo} alt="Cyber Supply"/>

            <Nav>
                <Ul>
                    <Li><Link to="/" className="fs-16 buttonStyle">Home</Link></Li>
                    <Li><Link to="#" className="buttonStyle">About</Link></Li>
                    <Li><Link to="#" className="buttonStyle">Contact</Link></Li>
                </Ul>

                <Ul>
                    <Li><Link to="#" className="buttonSecondary">Login</Link></Li>
                    <Li><P>/</P></Li>
                    <Li><Link to="/register" className="buttonSecondary"> Register</Link></Li>
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
    let headerEl = document.getElementById('head');

    if(location === '/register') {
        headerEl.classList.add("fixed");
    } else {
        headerEl.classList.remove("fixed");
    }
}

export default Header;