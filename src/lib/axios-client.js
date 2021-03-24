import axios from 'axios';

const client = axios.create({
    baseURL:'https://thecatapi.com/v1',
    params: {
        api_key: '7323a148-393c-4280-99fc-15ce80719208'
    }
});

export default client;
