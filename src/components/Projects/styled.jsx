import React, { Component } from "react";

export const Container = styled.div`
    margin: auto;
    display: flex;
    align-items: space-between;
    padding: 30px;
`

export const Item = styled.div`
    width: 250px;
    height: 250px;
`

export const Title = styled.p`
    font-family: 'Roboto Mono',  monospace;
    font-weight: strong;
    font-size: 24px;
    letter-spacing: 1em;
`

export const Text = styled.p`
    font-family: 'Roboto Mono',  monospace;
    font-size: 20px;
    letter-spacing: 1em;
`

export const Icon = styçed.img`
    width: 250px;
    height: 200px;
    border-bottom: 2px #000060 solid;
`