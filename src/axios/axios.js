import axios from 'axios'

export default axios.create({
    baseURL: 'http://sdobackend.api:3003/sdo/'
})