import styled from "styled-components";

import banner from "../../assets/img/banner.png";

const opacity = "75%";

export const GreatTitle = styled.img`
    width: 48%;
    height: 220px;

    padding-top: 250px;
    padding-left: 130px;

    z-index: 20;
`;

export const SubTitle = styled.h3`
    font-family: 'Roboto Mono', monospace;
    color: #fefefe;
    font-size: 64px;

    position: absolute;
    top: 420px;

    padding-left: 430px;
    margin: 0px;

    z-index: 12;
`;

export const BannerContainer = styled.div`
    width: 100%;
    height: 1000px;

    background: url(${banner});
    background-size: cover;
    z-index: -10;
`;

export const Gradient = styled.div`
    width: 100%;
    height: 150px;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgb(00, 00, 30) 60%);

    padding-top: 458px;
`;

export const FirstCode = styled.img`
    width: 1600px;
    height: 160px;
    opacity: ${opacity};

    position: absolute;
    top: 580px;
    left: -100px;
`

export const SecondCode = styled.img`
    width: 1000px;
    height: 160px;
    opacity: ${opacity};

    position: absolute;
    top: 300px;
    left: 1100px;
`

export const ThirdCode = styled.img`
    width: 1200px;
    height: 200px;
    opacity: ${opacity};

    position: absolute;
    top: 40px;
    left: -200px;
`

export const FourthCode = styled.img`
    width: 800px;
    height: 160px;
    opacity: ${opacity};

    position: absolute;
    top: 220px;
    left: 1300px;
`

export const FifthCode = styled.img`
    width: 1200px;
    height: 160px;
    opacity: ${opacity};

    position: absolute;
    top: 460px;
    left: -180px;
`