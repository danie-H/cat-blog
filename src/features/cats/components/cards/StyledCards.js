import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCardComponent = styled(Card)`
    width: 300px;
    height: 300px;
    margin: 20px;
    background-color: aliceblue !important;
    box-shadow: 10px 5px 5px #bcbcc1;
    &:hover{
        box-shadow: none;
    }
    & .card-img-top {
        padding: 0.25em;
        cursor: pointer;
    }
    & .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & .h5 {
            font-size: 0.8em;
            font-weight: bolder;
        }
        height: 100%;
        padding: 0.5em;
    }
    & .card-text {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
`;

const StyledCard = styled.div`
    background-color: #e6e7ed;
    width: 250px;
    height: 300px;
    border: solid 1px #e6e7ed;
    margin: 10px;
    box-shadow: 10px 5px 5px #bcbcc1;
    border-radius: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;

    & img, .poster_path {
        width: 250px;
        height: 250px;
        border-top-left-radius: 0.4em;
        border-top-right-radius: 0.4em;
    }

    & .vote_average {
        width: 50px;
        height: 50px;
        display: flex;
        margin-left: -11em;
    }

    & .title {
        font-weight: bold;
        margin-top: -1.5px;
    }

    & .dateAndTitle{
    }

    & svg {
        width: 50px;
        height: 50px;
        background-color: #2e2e31;
        border-radius: 50%;
    }

    & .intelligence, .energy {
        margin-right:  30px;
    }

`

export default StyledCard;