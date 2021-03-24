import styled from 'styled-components';

const StyledButton = styled.div`

    width: ${props => props.width};
    background: ${props => props.background};
    color: ${props => props.color};
    border-radius: ${props => props.radius};
    height: 2em;
    border: solid 1px #2961ae;
    padding-top: 1em;
    margin: 5px;
    box-shadow: 5px 2px 2px #8abafc;
    text-align: center;

`;

export default StyledButton;