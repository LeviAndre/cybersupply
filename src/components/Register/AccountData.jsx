import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";
import Header from "../Header/Header.jsx";
import { ContainerVisibility } from "../Header/styled.jsx";
import { TextField, Button, Container, FormArea, LabelArea, Text } from "./styled.jsx";

function AccountData({onData}) {
    const [phone, setPhone] = useState("");
    const [available, setAvailable] = useState("");
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

                <LabelArea style={{display: 'flex', marginTop: '5px'}}>

                    <TextField       
                    style={{ width: '25px', height: '25px', marginTop: '8px'}}      
                    value={available}
                    onChange={(event) =>{ setAvailable(event.target.value)}}
                    id="available" type="checkbox" placeholder="Available"/>

                    <Text style={{margin: '0px', marginBottom: '0px'}}>Open For Work</Text>     

                </LabelArea>

                <LabelArea style={{display: 'flex', marginTop: '8px'}}>

                    <TextField       
                    style={{ width: '25px', height: '25px', marginTop: '8px'}}      
                    value={available}
                    onChange={(event) =>{ setAvailable(true)}}
                    id="available" type="checkbox" placeholder="Available"/>

                    <Text style={{margin: '0px', marginBottom: '0px'}}>Receive notifications</Text>     

                </LabelArea>
                
                <LabelArea style={{display: "flex", justifyContent: "flex-end", marginRight: "0px", marginTop: "30px"}}>

                    <Button>Next</Button>

                </LabelArea>

            </Container>
        </FormArea>
    )
}

export default AccountData;