import axios from 'axios';

function axiosWithAuth() {
    const key = localStorage.getItem('key')
    console.log('WITH AUTH TOKEN: ', key);
    return axios.create({headers : {Authorization: key}})
}

export default axiosWithAuth