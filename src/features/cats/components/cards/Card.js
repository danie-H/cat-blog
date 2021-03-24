import React, { useEffect, useState } from 'react';
import { StyledCardComponent } from './StyledCards'; 
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import isFavourite from '../../../../lib/is-favourites';
import { useDispatch } from 'react-redux';
import { deleteFavouriteAction, postFavouritesAction } from '../../catSlice';

const CardComponent = ({ breed: { name : title, id, image }, favourites}) => {
    const dispatch = useDispatch();
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        setIsFav(isFavourite(favourites, image));
    }, [favourites, image])
    let history = useHistory();
    function showDetail(id) {
        history.push({pathname: "/detail", search: `?id=${id}`});
    }

    function handleClick(id) {
       if(isFavourite(favourites, image)) {
        dispatch(deleteFavouriteAction(id));
        setIsFav(!isFav);
       } else {
        dispatch(postFavouritesAction(id));
        setIsFav(!isFav);
       }
    }

    return (
        <StyledCardComponent>
            { image && <StyledCardComponent.Img style={{ aspectRatio: '4/3' }} variant="top" src={`${image.url}`} alt={title} onClick={() => showDetail(id)} />}
            <StyledCardComponent.Body>
                <StyledCardComponent.Title>{title}</StyledCardComponent.Title>
                <StyledCardComponent.Text as='div'>
                        { image && favourites && 
                            <FontAwesomeIcon icon={faThumbsUp} size='2x' 
                                color={isFav ? '#6a05c7': '#dedce0'} 
                                style={{cursor: 'pointer'}} onClick={() => handleClick(image.id)}
                            />
                        }
                </StyledCardComponent.Text>
            </StyledCardComponent.Body>
        </StyledCardComponent>
    )
}

export default CardComponent;