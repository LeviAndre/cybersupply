import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-itens: flex-start;
    padding-top: 70px;

    width: 100%;
    height: 15em;

    background: #000005;
`

export const Item = styled.div`
    width-max: 10%;
    height: 10em;
    text-align: center;
    padding-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-itens: center;

    &:nth-child(5) {
        justify-content: center;
    }
`

export const Title = styled.h1`
    padding: 0px;
    padding-bottom: 2px;
    font-size: 22px;
    font-weight: strong;
    letter-spacing: 0em;
    color: white;
    font-family: Sans-serif;
`

export const List = styled.ul`
    padding: 0px;
    margin: 15px;
`

export const SubTitle2 = styled.button`
    font-size: 20px;
    color: white;
    font-family: Sans-serif;

    background: none;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

export const Icon = styled.img`
    width: 22px;
    height: 22px;
    padding-right: 5px;
    margin: 0px;
`

export const Logo = styled.img`
    margin: 0px 0px 0px 100px;

    width: 320px;
    height: 180px;
`

export const Divisor = styled.div`
    display: block;
    content: "";
    background: #fff;
    width: 3px;
    height: 250px;
`
