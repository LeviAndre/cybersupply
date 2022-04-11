import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";

import { TextField, Button, Container, FormArea, Text, LabelArea, Check } from "./styled.jsx";

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

                <LabelArea>

                <Text>How should we call you?</Text>

                <TextField             
                value={nickname}
                onChange={(event) =>{ setNickname(event.target.value)}}
                id="nickname" type="text" required/>

                </LabelArea>

                <LabelArea>

                <Text>Specialization: </Text>

                <TextField            
                value={area}
                onChange={(event) =>{ setArea(event.target.value)}}
                id="area" type="text"/>

                </LabelArea>

                <LabelArea style={{display: 'flex', marginTop: '30px'}}>

                <TextField       
                style={{backgroundColor: '#000', border: 'none', borderRadius: '100px', width: '25px', height: '25px', marginTop: '8px'}}      
                value={available}
                onChange={(event) =>{ setAvailable(event.target.value)}}
                id="available" type="checkbox" placeholder="Available"/>
                <Check></Check>

                <Text style={{margin: '0px', marginBottom: '0px'}}>Open For Work</Text>     
                
                </LabelArea>


                <Button>Next</Button>
            </Container>
        </FormArea>
    )
}

export default ProfessionalData;