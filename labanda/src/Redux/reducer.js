import { GET_PAGE_IMAGES , GET_HOME_IMAGES, POST_USER_IMAGE, GET_USER_IMAGES } from "./actions";


const initialState = {
    pageImages:[],
    homeImages:[],
    userImages:[],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_PAGE_IMAGES:
            return{
                ...state,
                pageImages: action.payload,
            }
        case GET_HOME_IMAGES:
            return{
                ...state,
                homeImages: action.payload,
            }
        case POST_USER_IMAGE:
            return{
                ...state
            }
        case GET_USER_IMAGES:
            return {
                ...state,
                userImages: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;