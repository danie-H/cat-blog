import client from './axios-client';

export const fetchBreeds = async () => {
    const data = await client.get('/breeds').then(response => response.data);
    return data;
}

export const fetchBreedDetail = async (name) => {
    const data = await client.get(`/breed/${name}`).then(response => response.data);
    return data;
}
