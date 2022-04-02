import { useContext, useState } from "react";
import { TextField, Button, Container } from "./styled.jsx";

function AccountData({onData}) {
    const [phone, setPhone] = useContext("");
    const [password, setPassword] = useContext("");
    return (
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
            onChange={(event) =>{ setPassword(event.target.value)}}id="password" type="text" required placeholder="Password"/>
            <Button>Next</Button>
        </Container>
    )
}

export default AccountData;