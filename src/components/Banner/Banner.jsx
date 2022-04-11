import React, { Component } from "react";
import { GreatTitle, SubTitle, BannerContainer, Gradient,
         FirstCode, SecondCode, ThirdCode, FourthCode, FifthCode } from "./styled.jsx";

import "./animation.css"

import name from "../../assets/img/name.svg"
import consoleLog from "../../assets/img/SVGAnimation/consoleLog.svg"
import commit from "../../assets/img/SVGAnimation/commit.svg"
import express from "../../assets/img/SVGAnimation/express.svg"
import selectDB from "../../assets/img/SVGAnimation/selectDB.svg"
import importR from "../../assets/img/SVGAnimation/importR.svg"

function Banner() {
        return (
            <BannerContainer>

                <GreatTitle src={name} className="writer"/>
                <SubTitle>So your code <span 
                    style={{color: '#0AE300'}}
                    className="txt-rotate"
                    data-period="3500"
                    data-rotate='[ "fly higher.", "go further.", "get paid", "make noise?", 
                                   "fly HIGHER!" ]'> </span></SubTitle>
                <Gradient></Gradient>

                <FirstCode className="layer" data-speed="9" src={consoleLog}/>
                <SecondCode className="layer" data-speed="19" src={express}/>
                <ThirdCode className="layer" data-speed="8" src={commit}/>
                <FourthCode className="layer" data-speed="13" src={selectDB}/>
                <FifthCode className="layer" data-speed="13" src={importR}/>

            </BannerContainer>
        )
}

//Parallax Script

document.addEventListener("mousemove", parallax);

function parallax(e){
  this.querySelectorAll(".layer").forEach(layer=>{
    const speed = layer.getAttribute("data-speed");
    
    const x = (window.innerWidth - e.pageX*speed)/150;
    const y = (window.innerHeight - e.pageY*speed)/150;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

//Text Script

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 7) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 2);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #0AE300 }";
    document.body.appendChild(css);
  };

export default Banner;