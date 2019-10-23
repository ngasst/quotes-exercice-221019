import Axios from 'axios';

export function getClient(url = 'https://api.chucknorris.io') {
    return Axios.create({
        baseURL: url
    });
}