import { TextField, Button, Container } from "./styled.jsx";

function ProfessionalData() {
    return (
        <Container>
            <TextField id="area" type="text" placeholder="Area" />
            <TextField id="available" type="text" placeholder="Available"/>
            <TextField id="nickname" type="text" placeholder="Nickname"/>
            <Button>Next</Button>
        </Container>
    )
}

export default ProfessionalData;