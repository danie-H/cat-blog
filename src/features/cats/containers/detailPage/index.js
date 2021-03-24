import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchBreedDetailsAction, fetchBreedImagesAction, selectBreedDetails, selectBreedImages } from '../../catSlice';
import CarouselComponent from '../../components/carousel';
import StyledDetailPage from './StyledDetailPage';

const DetailPage = () => {
    const dispatch = useDispatch();
    const selectedBreedDetails = useSelector(selectBreedDetails);
    const selectedBreedImages = useSelector(selectBreedImages);
    const [details, setDetails] = useState(null);
    const [images, setImages] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const id = new URLSearchParams(location.search).get('id');
        dispatch(fetchBreedDetailsAction(id));
        dispatch(fetchBreedImagesAction(id));
    },[dispatch]);

    useEffect(() => {
        setDetails(selectedBreedDetails);
        setImages(selectedBreedImages);
    },[selectedBreedDetails, selectedBreedImages])
    return (
        <Container fluid='sm'>
            <StyledDetailPage>
                {images && <CarouselComponent images={images} />}
            </StyledDetailPage>
        </Container>
    
    )
}

export default DetailPage;