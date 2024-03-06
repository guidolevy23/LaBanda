import { GET_PAGE_IMAGES , GET_HOME_IMAGES } from "./actions";


const initialState = {
    pageImages:[],
    homeImages:[],
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
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;