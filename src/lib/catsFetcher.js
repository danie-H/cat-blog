import client from './axios-client';

export const fetchBreeds = async () => {
    const data = await client.get('/breeds').then(response => response.data);
    return data;
}

export const fetchBreedDetail = async (name) => {
    const data = await client.get(`/breed/${name}`).then(response => response.data);
    return data;
}

export const fetchFavourites = async () => {
    const data = await client.get('/favourites').then(response => response.data);
    return data;
}

export const postFavourite = async (id) => {
    const data = await client.post('/favourites', {
        image_id: id,
        sub_id: "7323a148-393c-4280-99fc-15ce80719208"

    }).then(response => response.data);
    return data;
}

export const deleteFavourite = async (id) => {
    const data = await client.delete(`/favourites/${id}`).then(response => response.data);
    return data;
}

export const fetchBreedImages = async (name) => {
    const data = await client.get('/images/search', {
        params: {
            breed_ids: name,
            limit: 5
        }
    }).then(response => response.data);
    return data;
}

export default fetchBreeds;