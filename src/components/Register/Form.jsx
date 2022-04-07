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
    <ReturnModal>
            <Text>Name: {pickedData.name}</Text>
            <Text>Last Name: {pickedData.lastName}</Text>
            <Text>Birth Date: {pickedData.birth}</Text>
            <Text>E-mail: {pickedData.email}</Text>

            <Text>Area: {pickedData.area}</Text>
            <Text>Available: {pickedData.available}</Text>
            <Text>Nickname: {pickedData.nickname}</Text>

            <Text>Phone: {pickedData.phone}</Text>
    </ReturnModal>

    const registered = 
    <FormArea>
        <Container>
            <>{returnData}</>
            <Text>So we are done?  <AButton href="/">Sure!</AButton></Text>
            
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