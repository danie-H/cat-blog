import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBreedsAction, fetchFavouriteAction, selecFavourites, selectBreeds } from '../../catSlice';
import Card from '../../components/cards/Card';
import { StyleHomePage } from './StyledHomePage'

const HomePage = () => {
    const dispatch = useDispatch();
    const selectedBreeds = useSelector(selectBreeds);
    const selectedFavourites = useSelector(selecFavourites);
    const [breeds, setBreeds] = useState(null);
    const [favourites, setFavourites] = useState(null);


    useEffect(() => {
        dispatch(fetchBreedsAction());
        dispatch(fetchFavouriteAction())
    }, [dispatch])


    useEffect(() => {
        setBreeds(selectedBreeds);
        setFavourites(selectedFavourites);
    }, [selectedBreeds, selectedFavourites])

 
    return (
        <StyleHomePage className="justify-content-md-center">
            {breeds && favourites && breeds.map(breed => {
                return (
                    <div className="breeds">
                        <Card breed={breed} favourites={favourites} />
                    </div>)
            })}
        </StyleHomePage>
    )
}

export default HomePage;