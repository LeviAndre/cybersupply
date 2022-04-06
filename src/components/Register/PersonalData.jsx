import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";

import { TextField, Button, Container, FormArea } from "./styled.jsx";

function PersonalData({onData}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birth, setBirth] = useState("");
    const [email, setEmail] = useState("");

    return (
        <FormArea>
            <Container onSubmit={(event) => {
                event.preventDefault();
                onData({name, lastName, birth, email});
            }}>
                <TextField
                style={{ width: '25%' }}            
                value={name}
                onChange={(event) =>{ setName(event.target.value)}}
                id="name" type="text" required placeholder="Name" />

                <TextField      
                style={{ width: '31%' }}            
                value={lastName}
                onChange={(event) =>{ setLastName(event.target.value)}} 
                id="lastName" type="text" required placeholder="Last Name"/>

                <TextField            
                value={birth}
                onChange={(event) =>{ setBirth(event.target.value)}} 
                id="birth" type="text" required placeholder="Birth Date"/>

                <TextField            
                value={email}
                onChange={(event) =>{ setEmail(event.target.value)}}
                id="email" type="email" required placeholder="E-mail"/>

                <Button>Next</Button>
            </Container>
        </FormArea>
    )
}

export default PersonalData;