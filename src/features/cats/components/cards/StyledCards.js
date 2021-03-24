import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: #e6e7ed;
    width: 250px;
    height: 390px;
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
        height: 300px;
        border-top-left-radius: 0.4em;
        border-top-right-radius: 0.4em;
    }

    & .vote_average {
        width: 50px;
        height: 50px;
        margin-top: -30px;
        margin-left: -11em;
    }

    & svg {
        width: 50px;
        height: 50px;
        background-color: #2e2e31;
        border-radius: 50%;
    }

    & .react-sweet-progress-symbol-absolute  {
        font-size: 15px;
        margin-top: -40px;
        margin-left: -40px;
    }

    & .react-sweet-progress-symbol {
        color: white;
    }
`

export default StyledCard;