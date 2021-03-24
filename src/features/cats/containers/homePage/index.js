import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchBreedsAction, selectBreeds } from '../../catSlice';
import Card from '../../components/cards/Card';
import { StyleHomePage } from './StyledHomePage'

const HomePage = () => {
    const dispatch = useDispatch();
    const breedSelect = useSelector(selectBreeds);
    const [breeds, setBreeds] = useState([]);
    let history = useHistory();

    useEffect(() => {
        dispatch(fetchBreedsAction());
    }, [dispatch])


    useEffect(() => {
        setBreeds(breedSelect);
    }, [breedSelect])

    function showDetail(breed) {
        history.push({pathname: "/detail", search: `?id=${breed.id}`});
    }

    return (
        <StyleHomePage>
        {breeds && breeds.map(breed => {
            return (
                <div className="breeds" onClick={() => showDetail(breed)}>
                    <Card breed={breed} />
                </div>)
        })}
    </StyleHomePage>
    )
}

export default HomePage;