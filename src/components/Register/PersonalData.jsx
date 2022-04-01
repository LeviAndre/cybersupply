import { TextField, Button, Container } from "./styled.jsx";

function PersonalData() {
    return (
        <Container>
            <TextField id="name" type="text" placeholder="Name" />
            <TextField id="lastName" type="text" placeholder="Last Name"/>
            <TextField id="birth" type="text" placeholder="Birth Date"/>
            <TextField id="email" type="text" placeholder="E-mail"/>
            <Button>Next</Button>
        </Container>
    )
}

export default PersonalData;