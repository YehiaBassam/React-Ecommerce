import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://e-commerce-react-cee1f-default-rtdb.firebaseio.com/'
});

export default instance;