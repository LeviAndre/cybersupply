import React, { Component } from "react";

import { Container, Kinds, AddOn, Btn, Menu } from "./styled.jsx"

import kinds from "../../assets/img/kinds.svg";
import yellow from "../../assets/img/yellow.svg";
import red from "../../assets/img/red.svg";
import purple from "../../assets/img/purple.svg";
import blue from "../../assets/img/blue.svg";

function Categories(){
        return (
            <Container>
                
                <Kinds src={kinds}/>

                <Menu>
                    <Btn>DESKTOP <AddOn src={red}/></Btn>
                    <Btn>WEB <AddOn src={purple}/></Btn>
                    <Btn>MOBILE <AddOn src={yellow}/></Btn>
                    <Btn>GAMES <AddOn src={blue}/></Btn>
                </Menu>

            </Container>
        )
}



export default Categories;