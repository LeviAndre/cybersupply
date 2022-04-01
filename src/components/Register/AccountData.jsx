import { TextField, Button, Container } from "./styled.jsx";

function AccountData() {
    return (
        <Container>
            <TextField id="phone" type="text" placeholder="Phone" />
            <TextField id="password" type="text" placeholder="Password"/>
            <Button>Next</Button>
        </Container>
    )
}

export default AccountData;