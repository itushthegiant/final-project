import axios from 'axios'
import { API_URL } from '../constants'

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Access-Control-Allow-Methods': ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
       'Access-Control-Allow-Headers': ['Origin', 'Content-Type', 'X-Auth-Token']
    }
})