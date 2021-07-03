import firebase from "firebase/app";
import "firebase/firestore";
import axios from 'axios';
// define API calls here

require('dotenv').config();

export const latlngToAddress = async(latitude, longitude) => {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        .then((res) => {
            return res.data.results[0].formatted_address
        })
        .catch((err) => {
            console.log(err)
        })
}