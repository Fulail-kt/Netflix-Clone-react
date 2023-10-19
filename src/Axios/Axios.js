import axios from 'axios'
import { BASE_URL } from '../Constants/Constants'
const Instance=axios.create({
    baseURL:BASE_URL
})

export default Instance