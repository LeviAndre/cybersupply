import styled from "styled-components";

export const ContainerH = styled.div `
    width: 100%;
    height: 110px;

    position: fixed;
    top: 0;
    z-index: 15;

    display: flex;
    flex-direction: flex-start;
`

export const ContainerF = styled.div `
    width: 100%;
    height: 110px;

    position: absolute;

    background: #000020;

    display: flex;
    flex-direction: flex-start;
`

export const ContainerVisibility = styled.div `   
    width: 100%;
    height: 110px;

    position: fixed;
    top: 0;

    z-index: 14;
`

export const P = styled.p`
    font-family: 'Roboto Mono', monospace;
    color: white;
    font-size: 22px;

    position: absolute;
    z-index: 15;


    padding: 0px;
    margin: 0px;
`

export const Nav = styled.div`
    width: 75%;

    display: flex;
    justify-content: space-between;
    z-index: 15;
`

export const Ul = styled.ul`
    list-style-type: none;

    display: flex;

    margin-top: 40px;
    padding: 0px;
`

export const Li = styled.li`
    margin-top: 0px;
    margin-right: 10px;
    padding: 0px;
`

export const Btn = styled.a`
    font-family: 'Roboto Mono', monospace;
    text-decoration-line: none;
    color: white;
    font-size: 22px;

    background: none;
    border: none; 

    padding: 0px 30px 40px 30px;

    &:hover {
        border-bottom: 6px white solid;
        cursor: pointer;
    }
`

export const Btn2 = styled.a`
    font-family: 'Roboto Mono', monospace;
    text-decoration-line: none;
    color: white;
    font-size: 22px;

    background: none;
    border: none; 

    padding: 0;

    &:hover {
        cursor: pointer;
    }
`

export const Logo = styled.img`
    margin: 12px 100px 40px 170px;

    width: 160px;
    height: 90px;

    z-index: 15;
`

