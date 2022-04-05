import Form from "../components/Register/Form.jsx";
import Footer from "../components/Footer/Footer";
import HeaderFixed from "../components/Header/HeaderFixed";
import { BannerContainer } from "../components/Banner/styled.jsx";


function Register() {
    return (
        <BannerContainer>
            <HeaderFixed />
            <Form />
            <Footer />
        </BannerContainer>
    )
}

export default Register;