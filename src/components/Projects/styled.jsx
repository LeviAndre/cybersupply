import React, { Component } from "react";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 100px 0 135px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px;
`

export const CarouselContainer = styled.div`
    margin: 0 175px 100px 175px;
    padding: 90px;
    height: 400px;
    background: black;
`

export const Item = styled.div`
    margin: 38px;
    width: 480px;
    height: 300px;
    background: black;
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

export const Icon = styled.img`
    width: 250px;
    height: 200px;
    border-bottom: 2px #000060 solid;
`