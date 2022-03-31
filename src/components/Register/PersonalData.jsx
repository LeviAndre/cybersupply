import { TextField, Button, Container } from "./styled.jsx";

function PersonalData() {
    return (
        <Container>
            <TextField type="text" placeholder="Name" />
            <TextField type="text" placeholder="Last Name"/>
            <TextField type="text" placeholder="Birth Date"/>
            <TextField type="text" placeholder="E-mail"/>
            <Button>Next</Button>
        </Container>
    )
}

export default PersonalData;