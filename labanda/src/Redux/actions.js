import axios from "axios"
// export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_PAGE_IMAGES = "GET_PAGE_IMAGES";
export const GET_HOME_IMAGES = "GET_HOME_IMAGES";



// export const getAllCountries = () => dispatch => {
//     return axios.get("https://back-pi-countries.onrender.com/countries")
//     .then(respuesta => dispatch({type: GET_ALL_COUNTRIES , payload: respuesta.data }))
// }

export const getPageImages = () => dispatch => {
    return axios.get("http://localhost:3001/pageimages")
    .then(response => dispatch({type: GET_PAGE_IMAGES, payload: response.data}))
}
export const getHomeImages = () => dispatch => {
    return axios.get("http://localhost:3001/homeimages")
    .then(response => dispatch({type: GET_HOME_IMAGES, payload: response.data}))
}