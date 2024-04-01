import { TAKE_PHOTO } from "./actions";

const initialState ={
    hasPer:null,
    photoUri:null
};

const reducers = (state=initialState,action)=>{
    switch (action.type){
        case TAKE_PHOTO:
            return{
                ...state,
                photoUri: action.payload
            };
            default:
                return state;
    }
}
export default reducers;