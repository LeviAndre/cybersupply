import { useEffect, useState } from "react";
import AccountData from "./AccountData";
import PersonalData from "./PersonalData"
import ProfessionalData from "./ProfessionalData";
import * as yup from 'yup';

import { Container, Text, ReturnModal, AButton, FormArea } from "./styled.jsx";
import { BannerContainer } from "../Banner/styled.jsx" 

function Form({ onData }) {
    const [currentStage, setCurrentStage] = useState(0);
    const [currentData, setCurrentData] = useState({});
    
    const returnData = 
    <ReturnModal>
            <Text>Name: {currentData.name}</Text>
            <Text>Last Name: {currentData.lastName}</Text>
            <Text>Birth Date: {currentData.birth}</Text>
            <Text>E-mail: {currentData.email}</Text>

            <Text>Area: {currentData.area}</Text>
            <Text>Specialization: {currentData.specialization}</Text>
            <Text>Available: {currentData.available}</Text>
            <Text>Nickname: {currentData.nickname}</Text>

            <Text>Phone: {currentData.phone}</Text>
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
        setCurrentData({...currentData, ...data});
        next();
    }

    //Validate
    async function validate(currentData){
        let schema = yup.object().shape({

            // PERSONAL (doens't work yet)

        name: yup.string("It is necessary to choose a name!")
            .required("It is necessary to choose a name!"),

        lastName: yup.string("It is necessary to choose a name!")
            .required("It is necessary to choose a name!"),

        birth: yup.date("It is necessary to inform your birth date!")
            .required("It is necessary to inform your birth date!"),

        email: yup.string("It is necessary to inform your e-mail address!")
            .required("It is necessary to inform your e-mail address!")
            .email("This is not a valid e-mail address!"),

            // PROFESSIONAL

        nickname: yup.string("You have to choose a surname!")
            .required("You have to choose a surname!")
            .min(6, "Your nickname need to have at least six characteres"),

        area: yup.string("You have to choose a area specification!")
            .required("You have to choose a area specification!"),

        specialization: yup.string("You have to choose a specialization!")
            .required("You have to choose a specialization!"),

            // ACCOUNT

        phone: yup.string("You have tell us you phone number!")
            .required("You have tell us you phone number!"),

        password: yup.string("You need to make your password!")
            .required("You need to make your password!")
            .min(8, "Your password need to have at least eight characteres."),

        confPassword: yup.string("Your passwords doesn't match")
            .required("Your password doesn't match")
            
        });

        try{
            await schema.validate()
            return true;
        }catch (err) {
        /*    setStatus({
                type: 'error',
                message: err.errors
            });
            return false; */
        }
    }

    function next(){
            setCurrentStage(currentStage+1);
    }

    return (
    <BannerContainer>
    {currentForm[currentStage]}
    </BannerContainer>);

}


export default Form;