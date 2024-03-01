import axios from "axios"
// export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_PAGE_IMAGES = "GET_PAGE_IMAGES";



// export const getAllCountries = () => dispatch => {
//     return axios.get("https://back-pi-countries.onrender.com/countries")
//     .then(respuesta => dispatch({type: GET_ALL_COUNTRIES , payload: respuesta.data }))
// }

export const getPageImages = () => dispatch => {
    return axios.get("http://localhost:3001/pageimages")
    .then(ressponse => dispatch({type: GET_PAGE_IMAGES, payload: respuesta.data}))
}