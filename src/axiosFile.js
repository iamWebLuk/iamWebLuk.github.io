import axios from 'axios'

const apiKey = 'e8d80c94721241df8fce83e61e5cbac7';
const baseURL = 'https://api.football-data.org'
const url = '/v2/competitions/CL/matches'
const fullURL = 'https://api.football-data.org/v2/competitions/CL/matches'


export default axios.create({
    baseURL: fullURL,
    headers: {
        'X-Auth-Token': apiKey
    },
});