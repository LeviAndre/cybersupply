import { useState } from "react";
import AccountData from "./AccountData";
import PersonalData from "./PersonalData"
import ProfessionalData from "./ProfessionalData";

function Form({ onData, CPFvalidate }) {
    const [currentStage, setCurrentStage] = useState(0);
    const [pickedData, setPickedData] = useState({});

    const currentForm = [
    <PersonalData onData={next} />,
    <ProfessionalData onData={next} />,
    <AccountData onData={onData} />,
    <p>Thx for submit!</p>
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