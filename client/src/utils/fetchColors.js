import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const fetchColors = () => {
    return axiosWithAuth()
        .get('/colors')
        .then((res) => {
            //console.log('colors get res: ', res)
            // setColorList(res.data)
            return res
        })
    }

export default fetchColors;