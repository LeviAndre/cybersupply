import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Container = styled.form`
    width: 40%;
    min-height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    background: #000015;
    padding: 70px;
`

export const TextField = styled.input`
    font-family: 'Roboto Mono',  monospace;

    height: 60px;
    width: 60%;
    margin: 15px auto;
    padding: 5px;
    border-radius: 3px;
    border: 5px #000060 solid;
    background: #000060;

    font-size: 36px;
    color: #fff;
    
`

export const Button = styled.button`
    font-family: 'Roboto Mono',  monospace;
    border-radius: 5px;
    background: #000060;
    border: none;
    color: #fff;
    font-size: 36px;
    padding: 5px;
    
    width: 120px;

    margin-left: 500px;

    &:hover {
        cursor: pointer;
    }
`