import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Roboto Mono',  monospace;
    color: #fff;
    font-size: 22px;

    background: none;
    border: none;
    border: 2px #007CFF solid;

    position: relative;

    padding: 5px;

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
        transition: all 0.1s ease;
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