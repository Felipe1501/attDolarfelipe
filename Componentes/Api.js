import axios from "axios";

const APIDolar = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/',
});

export default APIDolar;