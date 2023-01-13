import axios from 'axios';

const api = axios.create({
    baseURL:'http://www.geonames.org/childrenJSON?geonameId=3469034'
})

export { api }