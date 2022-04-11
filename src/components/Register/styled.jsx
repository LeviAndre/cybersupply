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
    font-size: 28px;
    color: #fff;

    height: 50px;
    width: 100%;

    padding: 5px;

    border: none;
    background: #000040;
    
`

export const LabelArea = styled.div`
    width: 60%;
    margin: 10px;

`

export const Button = styled.button`
    font-family: 'Roboto Mono',  monospace;
    color: #fff;
    font-size: 28px;

    background: none;
    border: none;
    border: 2px #007CFF solid;

    position: absolute;
    top: 640px;
    right: 694px;

    padding: 8px;
    margin: 10px;
    
    width: 120px;

    &:after {
        content: "";
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;  
        right: 0;
        z-index: -1;
        background: #007CFF;
        transition: all 0.3s ease;
    }

    &:hover {
        cursor: pointer;
        background: #007CFF;
        transition: all 0.3s ease;
    }
    &:hover:after {
        left: 0;
        width: 100%;
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

    font-size: 18px;
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

export const Check = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
    
`