import axios from 'axios';

const client = axios.create({
    baseURL:'https://api.thecatapi.com/v1',
    headers: {
        'x-api-key': '7323a148-393c-4280-99fc-15ce80719208',
        'X-Requested-With': true,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
    }
});

export default client;
