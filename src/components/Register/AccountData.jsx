import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";
import Header from "../Header/Header.jsx";
import { ContainerVisibility } from "../Header/styled.jsx";
import { TextField, Button, Container } from "./styled.jsx";

function AccountData({onData}) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    /*const [erros, setErros] = useState({ password: { passed: true, text: "" } }) adc valicadção*/
    return (
        <>

            <Container onSubmit={(event) => {
                event.preventDefault();
                onData({phone, password});
            }}>
                <TextField 
                value={phone}
                onChange={(event) =>{ setPhone(event.target.value)}}
                id="phone" type="text" placeholder="Phone" />

                <TextField 
                value={password}
                onChange={(event) =>{ setPassword(event.target.value)}}
                id="password" type="text" required placeholder="Password"/>
                
                <Button>Next</Button>
            </Container>
        </>
    )
}

export default AccountData;