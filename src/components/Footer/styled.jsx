import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 15em;

    display: flex;
    justify-content: space-around;
    align-itens: flex-start;

    padding-top: 70px;

    background: #000005;
`

export const Item = styled.div`
    width-max: 10%;
    height: 10em;

    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    display: flex;
    padding: 0px;

    &:nth-child(5) {
        align-items: center;
    }
`

export const Title = styled.h1`
    font-size: 22px;
    font-weight: strong;
    letter-spacing: 0em;
    color: white;
    font-family: 'Roboto Mono', monospace;

    padding: 0px;
    margin: 0px;
    margin-bottom: 8px;
    margin-top: 10px;
`

export const CreditName = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    color: white;

    padding: 0px;
    margin: 0px;
`

export const CreditTitle = styled.h1`    
    font-family: 'Roboto Mono', monospace;
    font-size: 22px;
    font-weight: strong;
    color: white;
    letter-spacing: 0.1em;

    padding: 0px;
    margin-top: 40px;
`

export const List = styled.ul`
    padding: 6px;
    padding-left: 0px;
    margin: 0px;

    display: flex;
    align-items: space-around;
`

export const SubTitle2 = styled.button`
    font-size: 16px;
    color: white;    
    font-family: 'Roboto Mono', monospace;

    background: none;
    border: none;

    padding: 0px;
    margin: 0px;
    margin-bottom: 2px;

    &:hover {
        cursor: pointer;
    }
`

export const Icon = styled.img`
    width: 20px;

    padding: 0px;
    padding-right: 5px;
    margin: 0px;
`

export const Logo = styled.img`
    width: 320px;
    height: 180px;

    margin: 0px 0px 0px 100px;
`

export const Divisor = styled.div`
    width: 3px;
    height: 250px;  

    display: block;
    content: "";
    background: #fff;
`
