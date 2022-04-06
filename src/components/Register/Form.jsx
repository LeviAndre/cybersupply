import { useEffect, useState } from "react";
import AccountData from "./AccountData";
import PersonalData from "./PersonalData"
import ProfessionalData from "./ProfessionalData";

import { BannerContainer } from "../Banner/styled.jsx";

import { Container, Text, ReturnModal, TitleText, Button, AButton, FormArea } from "./styled.jsx";

function Form({ onData, CPFvalidate }) {
    const [currentStage, setCurrentStage] = useState(0);
    const [pickedData, setPickedData] = useState({});
    
    const returnData = 
    <>
        <ReturnModal>
            <li>Name: {pickedData.name}</li>
            <li>Last Name: {pickedData.lastName}</li>
            <li>Birth Date: {pickedData.birth}</li>
            <li>E-mail: {pickedData.email}</li>

            <li>Area: {pickedData.area}</li>
            <li>Available: {pickedData.available}</li>
            <li>Nickname: {pickedData.nickname}</li>

            <li>Phone: {pickedData.phone}</li>
        </ReturnModal>
    </>

    const registered = 
    <FormArea>
        <Container>
            <TitleText>thx for submit</TitleText>
            <Text>{returnData}</Text>
            <Text>So we are done?</Text>
            <AButton href="/">Sure!</AButton>
        </Container>
    </FormArea>

    const currentForm = [
    <PersonalData onData={pickingData} />,
    <ProfessionalData onData={pickingData} />,
    <AccountData onData={pickingData} />,
    <>{registered}</>
    ];

    function pickingData(data) {
        setPickedData({...pickedData, ...data});
        next();
    }


    function next(){
            setCurrentStage(currentStage+1);
    }


    return <>{currentForm[currentStage]}</>;

}


export default Form;