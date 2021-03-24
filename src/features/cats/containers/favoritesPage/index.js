import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFavouriteAction, selecFavourites } from '../../catSlice';
import Card from '../../components/cards/Card';
import { StyleFavourite } from './StyledFavouritesPage';

const Favourites = () => {
    const dispatch = useDispatch();
    const selectedFavourites = useSelector(selecFavourites);
    const [favourites, setFavourites] = useState(null);


    useEffect(() => {
        dispatch(fetchFavouriteAction())
    }, [dispatch])


    useEffect(() => {
        setFavourites(selectedFavourites);
    }, [selectedFavourites])

 
    return (
        <StyleFavourite className="justify-content-md-center">
            {favourites && favourites.map(fav => {
                return (
                    <div className="breeds">
                        <Card breed={fav} favourites={favourites} />
                    </div>)
            })}
        </StyleFavourite>
    )
}

export default Favourites;