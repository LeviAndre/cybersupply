import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";

import { TextField, Button, Container, FormArea } from "./styled.jsx";

function ProfessionalData({onData}) {
    const [area, setArea] = useState("");
    const [available, setAvailable] = useState("");
    const [nickname, setNickname] = useState("");

    return (
        <FormArea>
            <Container onSubmit={(event) => {
                event.preventDefault();
                onData({area, available, nickname});
            }}>
                <TextField            
                value={area}
                onChange={(event) =>{ setArea(event.target.value)}}
                id="area" type="text" placeholder="Area" />

                <TextField             
                value={available}
                onChange={(event) =>{ setAvailable(event.target.value)}}
                id="available" type="text" required placeholder="Available"/>

                <TextField             
                value={nickname}
                onChange={(event) =>{ setNickname(event.target.value)}}
                id="nickname" type="text" required placeholder="Nickname"/>

                <Button>Next</Button>
            </Container>
        </FormArea>
    )
}

export default ProfessionalData;