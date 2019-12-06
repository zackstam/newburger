import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://new-food-84adf.firebaseio.com/'
});

export default instance;