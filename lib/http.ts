import Axios from 'axios';

const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub21hbmtlciIsImV4cCI6MTcxNjQxNjA0MH0.aoHXjOTqHi1r_qcf0BXejxm2W9iX3tLz4aP6ETCLRZM';

const http = Axios.create({
    baseURL: 'http://20.25.141.251:8000',
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
})

export default http