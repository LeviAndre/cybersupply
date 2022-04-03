import { useEffect, useState } from "react";
import AccountData from "./AccountData";
import PersonalData from "./PersonalData"
import ProfessionalData from "./ProfessionalData";
import Registered from "./Registered";
import { Text } from "./styled.jsx"

function Form({ onData, CPFvalidate }) {
    const [currentStage, setCurrentStage] = useState(0);
    const [pickedData, setPickedData] = useState({});

    useEffect(()=>{
        console.log(pickedData);
    })

    const currentForm = [
    <PersonalData onData={pickingData} />,
    <ProfessionalData onData={pickingData} />,
    <AccountData onData={pickingData} />,
    <><Registered /> <Text>pintao da silva</Text></>
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