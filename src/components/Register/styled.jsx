import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Container = styled.form`
    width: 40%;
    min-height: 860px;

    margin: 0 auto;
    padding: 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: #000015;
    opacity: 80%;
`

export const TextField = styled.input`
    font-family: 'Roboto Mono',  monospace;
    font-size: 36px;
    color: #fff;

    height: 60px;
    width: 60%;

    margin: 15px auto;
    padding: 5px;

    border-radius: 5px;
    border: none;
    background: #000040;
    
`

export const Button = styled.button`
    font-family: 'Roboto Mono',  monospace;
    color: #fff;
    font-size: 36px;

    border-radius: 5px;
    background: #000040;
    border: none;

    padding: 5px;
    margin-left: 500px;
    
    width: 120px;

    &:hover {
        cursor: pointer;
    }
`

export const Text = styled.p`
    font-size: 18px;
    color: white;
`