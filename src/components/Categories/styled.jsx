import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    top: -200px;

    padding: 50px 100px 100px 150px;

    display: flex;
`

export const Kinds = styled.img`
    width: 400px;
    height: 800px;
`

export const AddOn = styled.img`
    width: 400px;
    height: 165px;

    padding: 0;
`

export const Btn = styled.button`
    font-family: 'Anton', sans-serif;
    color: white;
    font-size: 110px;

    background: none;
    border: 5px #000040 solid;

    min-width: 100px;
    min-height: 100px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    margin: 15px;
    padding: 0px 40px 0px 40px;

    &:hover {
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 70px;
`