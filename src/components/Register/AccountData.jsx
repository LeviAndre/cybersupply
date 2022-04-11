import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";
import Header from "../Header/Header.jsx";
import { ContainerVisibility } from "../Header/styled.jsx";
import { TextField, Button, Container, FormArea, LabelArea, Text } from "./styled.jsx";

function AccountData({onData}) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    /*const [erros, setErros] = useState({ password: { passed: true, text: "" } }) adc valicadção*/
    return (
        <FormArea>

            <Container onSubmit={(event) => {
                event.preventDefault();
                onData({phone, password});
            }}>
                
                <LabelArea>

                    <Text>Phone Number:</Text>

                    <TextField 
                    value={phone}
                    onChange={(event) =>{ setPhone(event.target.value)}}
                    id="phone" pattern="[0-9]{9}" type="tel"/>

                </LabelArea>


                <LabelArea>

                    <Text>Password</Text>

                    <TextField 
                    value={password}
                    onChange={(event) =>{ setPassword(event.target.value)}}
                    id="password" type="password" required/>

                </LabelArea>

                <LabelArea>

                    <Text>Confirm Password</Text>

                    <TextField type="password" required/>

                </LabelArea>
                
                <Button>Next</Button>
            </Container>
        </FormArea>
    )
}

export default AccountData;