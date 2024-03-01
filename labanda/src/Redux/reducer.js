import { GET_PAGE_IMAGES } from "./actions";


const initialState = {
    pageImages:[],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_PAGE_IMAGES:
            return{
                ...state,
                pageImages: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;