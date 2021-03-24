import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: #e6e7ed;
    width: 250px;
    height: 270px;
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

    & .dateAndTitle{
        margin-top: -50px;
    }

    & svg {
        width: 50px;
        height: 50px;
        background-color: #2e2e31;
        border-radius: 50%;
    }

    & .intelligence, .energy {
        margin-right: 30px;
    }

`

export default StyledCard;