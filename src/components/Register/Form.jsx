import AccountData from "./AccountData";
import PersonalData from "./PersonalData"
import ProfessionalData from "./ProfessionalData";

function Form() {
    const currentStage = 2;
    return (
        <>
            {currentForm(currentStage)}
        </>
    );
}

function currentForm(current) {
    switch(current) {
        case 0:
            return <PersonalData />;
        case 1:
            return <ProfessionalData />;
        case 2:
            return <AccountData />;
        default:
            return <p>Erro ao selecionar formulário.</p>;
    }
}

export default Form;