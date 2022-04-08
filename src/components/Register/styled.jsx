import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const FormArea = styled.div`
    max-width: 40%;
    min-height: 860px;
    max-height: 1180px;

    margin: 0 auto;

    background: #000020;
    opacity: 90%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.form`
    padding: 10px;

    max-width: 100%;
    max-height: 90%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: column;
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

    background: none;
    border: none;
    border-bottom: 2px white solid;
    border-right: 2px white solid;

    position: absolute;
    top: 570px;
    right: 716px;

    padding: 5px;
    margin: 10px;
    
    width: 120px;

    &:hover {
        cursor: pointer;
    }
`

export const AButton = styled.a`
    font-family: 'Roboto Mono',  monospace;
    color: #fff;
    font-size: 24px;

    margin: 0px;
    padding: 0px;

    &:hover {
        cursor: pointer;
    }
`

export const Text = styled.p`
    font-family: 'Roboto Mono', monospace;

    font-size: 24px;
    color: white;

    padding: 10px;
    margin: 0px;
`

export const TitleText = styled.p`
    font-family: 'Roboto Mono', monospace;

    font-size: 48px;
    color: white;
    font-weight: strong;

    padding: 0px;
    margin: 0px;
`

export const ReturnModal = styled.div`
    width: 50%;

    background: #000010;
    
    border-radius: 10px;

    padding: 60px;
    margin: 40px;
`