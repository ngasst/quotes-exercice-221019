import Axios from 'axios';

export function getClient(url = 'https://api.chucknorris.io') {
    if(url.includes('breeds')) {
        return Axios.create({
            baseURL: url
        });
    }
    return Axios.create({
        baseURL: 'https://api.chucknorris.io'
    });
}