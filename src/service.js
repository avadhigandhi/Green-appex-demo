import axios from 'axios'

const baseURL = 'https://api.nasa.gov/neo/rest/v1/neo'
const APIKEY = 'OzMPI539JS0t7vpL4mHxSf8mPDjyds0LkoULHetA'

export const submitDataAsync = (reqData) => {
    let reqURl = `https://api.nasa.gov/neo/rest/v1/neo/${reqData}?api_key=OzMPI539JS0t7vpL4mHxSf8mPDjyds0LkoULHetA`
    return axios.get(reqURl).then((res) => {
        return res
    })

}

