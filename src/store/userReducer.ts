import { Action } from './tokens/actions';

// Altere a Interface de TokenState para UserState, e adicione o campo ID
export interface UserState {
    tokens: string,
    id: string,
}

const initialState = {
    tokens: "",
    id: ""
}

export const userReducer = (state: UserState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            
           
            return {tokens: action.payload, id: state.id}
        }
        case "ADD_ID": {

        
            return {id: action.payload, tokens: state.tokens}
        }

        default:
            return state
    }
}