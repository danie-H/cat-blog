import {  Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledDetailPage = styled(Carousel)`
    & .w-100 {
        height: 720px;
    }
  & .carousel-caption {
    & .transbox {
        background-color: rgba(100, 97, 97, 0.527);
        width: 100%   
    }
    & .transbox h3 {
          font-weight: bold;
          font-size: 5em;
      }
      & p {
          font-weight: bold;
      }
      & img{
          width: 1080px;
          height: 720px;
      }
  }
`;

export default StyledDetailPage;
