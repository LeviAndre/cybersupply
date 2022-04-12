import { useState } from "react";
import { BannerContainer } from "../Banner/styled.jsx";

import { TextField, Button, Container, FormArea, Text, LabelArea, Check, Options, TitleText } from "./styled.jsx";

function ProfessionalData({onData}) {
    const [area, setArea] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [nickname, setNickname] = useState("");

    return (
        <FormArea>
            <Container onSubmit={(event) => {
                event.preventDefault();
                onData({area, specialization, nickname});
            }}>

                <LabelArea>

                <Text>How should we call you?</Text>

                <TextField             
                value={nickname}
                onChange={(event) =>{ setNickname(event.target.value)}}
                id="nickname" type="text" required/>

                </LabelArea>

                <LabelArea>

                    <TitleText>Area: </TitleText>

                    <Options>
                        <Options>
                            <TextField
                            style={{width: "20px", height: "20px", margin: "9px", marginLeft: "0px"}}            
                            value={area}
                            onChange={(event) =>{ setArea("Desktop")}}
                            id="area" name="area" required type="radio"/> <Text>Desktop</Text>
                        </Options>

                        <Options>
                            <TextField
                            style={{width: "20px", height: "20px", margin: "9px"}}            
                            value={area}
                            onChange={(event) =>{ setArea("Mobile")}}
                            id="area" name="area" required type="radio"/> <Text>Mobile</Text>
                        </Options>

                        <Options>
                            <TextField
                            style={{width: "20px", height: "20px", margin: "9px"}}            
                            value={area}
                            onChange={(event) =>{ setArea("Web")}}
                            id="area" name="area" required type="radio"/> <Text>Web</Text>
                        </Options>

                        <Options>
                            <TextField
                            style={{width: "20px", height: "20px", margin: "9px"}}            
                            value={area}
                            onChange={(event) =>{ setArea("Games")}}
                            id="area" name="area" required type="radio"/> <Text>Games</Text>
                        </Options>
                    </Options>

                </LabelArea>

                <LabelArea>

                <TitleText>Specialization: </TitleText>

                    <Options>
                        <Options>
                            <TextField
                            style={{width: "20px", height: "20px", margin: "9px", marginLeft: "0px"}}            
                            value={specialization}
                            onChange={(event) =>{ setSpecialization("Front-end")}}
                            id="specialization" name="specialization" required type="radio"/> <Text>Front-end</Text>
                        </Options>

                        <Options>
                            <TextField
                            style={{width: "20px", height: "20px", margin: "9px"}}            
                            value={specialization}
                            onChange={(event) =>{ setSpecialization("Back-end")}}
                            id="specialization" name="specialization" required type="radio"/> <Text>Back-end</Text>
                        </Options>
                    </Options>

                </LabelArea>

                <LabelArea style={{display: "flex", justifyContent: "flex-end", marginRight: "0px", marginTop: "30px"}}>

                    <Button>Next</Button>

                </LabelArea>

            </Container>
        </FormArea>
    )
}

export default ProfessionalData;