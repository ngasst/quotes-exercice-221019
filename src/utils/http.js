import Axios from 'axios';

export function getClient(url = 'https://api.chucknorris.io') {
    if(url.includes('yoda')) {
        // only execute the code inside brackets, if the condition
        // between parentheses is met
    }
    return Axios.create({
        baseURL: url
    });
}