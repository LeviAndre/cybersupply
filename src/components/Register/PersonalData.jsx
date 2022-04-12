import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";

import { TextField, Button, Container, FormArea, LabelArea, Text } from "./styled.jsx";

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
                <LabelArea style={{display: 'flex'}}>

                    <div>
                    <Text>First Name</Text>

                    <TextField
                    style={{ width: '90%' }}            
                    value={name}
                    onChange={(event) =>{ setName(event.target.value)}}
                    id="name" type="text" required  />
                    </div>

                    <div>
                    <Text>Last Name:</Text>

                    <TextField      
                    style={{ width: '100%' }}            
                    value={lastName}
                    onChange={(event) =>{ setLastName(event.target.value)}} 
                    id="lastName" type="text" required/>
                    </div>

                </LabelArea>

                <LabelArea>

                    <Text>Birth Date:</Text>

                    <TextField            
                    value={birth}
                    onChange={(event) =>{ setBirth(event.target.value)}} 
                    id="birth" type="date" required/>

                </LabelArea>

                <LabelArea>

                    <Text>E-mail Adress:</Text>

                    <TextField            
                    value={email}
                    onChange={(event) =>{ setEmail(event.target.value)}}
                    id="email" type="email" required/>

                </LabelArea>

                <LabelArea style={{display: "flex", justifyContent: "flex-end", marginRight: "0px", marginTop: "30px"}}>

                    <Button>Next</Button>

                </LabelArea>
            
            </Container>
        </FormArea>
    )
}

export default PersonalData;