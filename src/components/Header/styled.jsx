import styled from "styled-components";

/*import Helmet from 'react-helmet';

export const Script = props => (
    <Helmet>
        <script type="module" src="./script.js"></script>  
    </Helmet>
);*/

export const ContainerH = styled.div `
width: 100%;
height: 70px;

position: fixed;
top: 0;
z-index: 10;

display: flex;
flex-direction: flex-start;
`

export const P = styled.p`
font-family: 'Roboto Mono', monospace;
color: white;
font-size: 22px;
padding: 0px;
margin: 0px;
`

export const Nav = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
`

export const Ul = styled.ul`
list-style-type: none;
display: flex;
margin-top: 40px;
padding: 0px;
`

export const Li = styled.li`
margin-top: 0px;
margin-right: 10px;
padding: 0px;
`

export const Btn = styled.button`
font-family: 'Roboto Mono', monospace;

background: none;
border: none; 
color: white;
font-size: 22px;
padding: 0px 30px 40px 30px;
&:hover {
    border-bottom: 6px, white;
    cursor: pointer;
}
`

export const Btn2 = styled.button`
font-family: 'Roboto Mono', monospace;

background: none;
border: none; 
color: white;
font-size: 22px;
padding: 0;
&:hover {
    cursor: pointer;
}
`

export const Logo = styled.img`
margin: 12px 100px 40px 170px;

width: 160px;
height: 90px;
`

