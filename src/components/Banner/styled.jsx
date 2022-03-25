import styled from "styled-components";

import banner from "../../assets/img/banner.svg";

export const GreatTitle = styled.img`
padding-top: 250px;
padding-left: 130px;
width: 48%;
height: 220px;
`;

export const SubTitle = styled.h3`
font-family: 'Roboto Mono', monospace;
  
color: #E7CF00;
font-size: 64px;
padding-left: 430px;
margin: 0px;

position: absolute;
top: 390px;
`;

export const Container = styled.div`
width: 100%;
height: 1000px;
background: url(${banner});
background-size: cover;
position: relative;
z-index: -10;
`;

export const Gradient = styled.div`
padding-top: 458px;
width: 100%;
height: 150px;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgb(00, 00, 20) 60%);
`;