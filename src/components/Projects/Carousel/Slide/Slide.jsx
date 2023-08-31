import { SlideContainer } from "./styled.jsx"

import { Button } from "../../../../geralStyle.jsx"

import { Title, Text } from "./styled.jsx"

function Slide ({ title, text, buttonText }) {

    return (
        <SlideContainer className="h-100">
            <Title>
                {title}
            </Title>

            <Text>
                {text}
            </Text>

            <Button style={{ width: "20%" }}>
                {buttonText}
            </Button>
        </SlideContainer>
    )
}

export default Slide;