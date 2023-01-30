// import BookI from "../components/book/book";
import { Action, ActionTypes } from "./actions";

export interface initialStateI {
   text: string;
   image: string;
   changeText: boolean;
   changeImage: boolean;
   isOpenModalImage: boolean
}

export const initialState: initialStateI | undefined = {
    text: '',
    image: '',
    changeText: false,
    changeImage: false,
    isOpenModalImage: false
}

export const reducer = (state: initialStateI = initialState, action: Action): initialStateI => {
    switch (action.type) {
        case ActionTypes.SET_IMAGE: {
            return {
                ...state,
                image: action.payload,
                changeImage: false,
            }
        }
        case ActionTypes.SET_TEXT: {
            return {
                ...state,
                text: action.payload,
                changeText: false,
            }
        }
        case ActionTypes.SET_CHANGE_IMAGE: {
            return {
                ...state,
                changeImage: action.payload,
            }
        }
        case ActionTypes.SET_CHANGE_TEXT: {
            return {
                ...state,
                changeText: action.payload,
            }
        }
        case ActionTypes.SET_IS_OPEN_MODAL_IMAGE: {
            return{
                ...state,
                isOpenModalImage: action.payload
            }
        }
        default:
            return state;
    }
};

export default reducer
