import { VIEW_TYPE } from "../action/types";
import { setView } from "../action/viewAction";

type ViewStateType = {
    view: string;
};

const initialState = {
    view: "Home",
};

type ViewActionType = | ReturnType<typeof setView>;

export default function viewReducer(state: ViewStateType = initialState, action: ViewActionType) {
    switch (action.type) {
        case VIEW_TYPE:
            return {...state, view: action.payload.view};
        
        default:
            return state;
    }
}