import {FIRST_VARIABLE} from "../types"

const INITIAL_STATE = {
    firstvalue:null
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case FIRST_VARIABLE:
            return{
                ...state,
                firstvalue:true
            }
        default:
            return state
    }
}