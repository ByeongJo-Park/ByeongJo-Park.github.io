import { PROJECT_TYPE } from "../action/types";
import { setProject } from "../action/projectAction";

type ProjectStateType = {
    project: string;
};

const initialState = {
    project: "MEFI",
};

type ProjectActionType = | ReturnType<typeof setProject>;

export default function projectReducer(state: ProjectStateType = initialState, action: ProjectActionType) {
    switch (action.type) {
        case PROJECT_TYPE:
            return {...state, project: action.payload.project};
        default:
            return state;
    }
}