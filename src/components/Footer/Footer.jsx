import { SubTitle } from "../Banner/styled.jsx";
import { Container, Item, Title, SubTitle2, Icon, List, Logo } from "./styled.jsx"

import twitter from "../../assets/img/twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import logo from "../../assets/img/logo.svg";

function Footer() {
    return (
        <Container>

            <Item>
                <Logo src={logo}/>
            </Item>

            <Item>
                <li>
                    <List><Title>Social Medias</Title></List>
                    <List><Icon src={facebook}/><SubTitle2>Facebook</SubTitle2></List>
                    <List><Icon src={instagram}/><SubTitle2>Instagram</SubTitle2></List>
                    <List><Icon src={twitter}/><SubTitle2>Twitter</SubTitle2></List>
                </li>
            </Item>

            <Item>
                <Title>Developed by</Title>
                <SubTitle2>André Levi</SubTitle2>
            </Item>


        </Container>
    )
}

export default Footer;