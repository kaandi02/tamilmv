import axios from 'axios';

const instance = axios.create({
    baseURL:"https://mv-stream.herokuapp.com/",
})

export default instance;
