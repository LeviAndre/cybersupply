import { useEffect, useState } from "react";
import AccountData from "./AccountData";
import PersonalData from "./PersonalData"
import ProfessionalData from "./ProfessionalData";

import { Stepper, Step, StepLabel } from "@material-ui/core";

import { Container, Text, ReturnModal, AButton, FormArea } from "./styled.jsx";

function Form({ onData }) {
    const [currentStage, setCurrentStage] = useState(0);
    const [pickedData, setPickedData] = useState({});
    
    const returnData = 
    <ReturnModal>
            <Text>Name: {pickedData.name}</Text>
            <Text>Last Name: {pickedData.lastName}</Text>
            <Text>Birth Date: {pickedData.birth}</Text>
            <Text>E-mail: {pickedData.email}</Text>

            <Text>Area: {pickedData.area}</Text>
            <Text>Specialization: {pickedData.specialization}</Text>
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


    return (
    <>
        <Stepper activeStep={currentStage}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
    {currentForm[currentStage]}
    </>);

}


export default Form;