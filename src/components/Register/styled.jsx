import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Container = styled.form`
    max-width: 40%;
    min-height: 860px;

    margin: 0 auto;
    padding: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    background: #000020;
    opacity: 90%;
`

export const TextField = styled.input`
    font-family: 'Roboto Mono',  monospace;
    font-size: 36px;
    color: #fff;

    height: 60px;
    width: 60%;

    padding: 5px;
    margin: 10px;

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

export const AButton = styled.a`
    font-family: 'Roboto Mono',  monospace;
    color: #fff;
    font-size: 36px;

    border-radius: 5px;
    background: #000040;
    border: none;

    padding: 5px;
    margin-left: 500px;
    
    width: 120px;

    text-decoration-line: none;

    &:hover {
        cursor: pointer;
    }
`

export const Text = styled.p`
    font-family: 'Roboto Mono', monospace;

    font-size: 24px;
    color: white;
`

export const TitleText = styled.p`
    font-family: 'Roboto Mono', monospace;

    font-size: 48px;
    color: white;
    font-weight: strong;
`

export const ReturnModal = styled.ul`
    width: 90%;

    background: #000010;
    border-radius: 10px;

    padding: 30px;
    margin: 0 auto;
`