import twitter from "../../assets/img/twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import logo from "../../assets/img/logo.svg";
import email from "../../assets/img/email.svg";
import phone from "../../assets/img/phone.svg";

import {
    Container,
    Item,
    Title,
    SubTitle2,
    Icon, List,
    Logo,
    Divisor,
    CreditName,
    CreditTitle
} from "./styled.jsx"

function Footer() {
    return (
        <Container>
            <Item>
                <Logo src={logo} />
            </Item>

            <Item>
                <Divisor />
            </Item>

            <Item>
                <Title>Social Medias</Title>
                <List><Icon src={facebook} /><SubTitle2>Facebook</SubTitle2></List>
                <List><Icon src={instagram} /><SubTitle2>Instagram</SubTitle2></List>
                <List><Icon src={twitter} /><SubTitle2>Twitter</SubTitle2></List>
            </Item>

            <Item>
                <Title>Contact</Title>
                <List><Icon src={phone} /><SubTitle2>+55 11 99484-8357</SubTitle2></List>
                <List><Icon src={email} /><SubTitle2>cybersupply@contact.com</SubTitle2></List>
            </Item>


            <Item>
                <CreditTitle>Developed by</CreditTitle>
                <CreditName>André Levi</CreditName>
            </Item>

        </Container>
    )
}

export default Footer;