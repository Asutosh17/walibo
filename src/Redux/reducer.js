import { GET_CHARACTERS, GET_LOCATIONS, GET_SINGLE_CHARACTER } from "./actions"

const initState = {
    locations: {},
    characters : [],
    singleCharacter : {},
    loading:true
}

export const LocationReducer = (state=initState, action) => {
    switch(action.type){
        case GET_LOCATIONS : 
        return {
            ...state,
            locations : action.payload,
            loading:false,
        }
        case GET_CHARACTERS : 
        return {
            ...state,
            characters : action.payload,
            loading:false,
        }
        case GET_SINGLE_CHARACTER : 
        return {
            ...state,
            singleCharacter : action.payload,
            loading:false
        }
        default : return state
    }    
}