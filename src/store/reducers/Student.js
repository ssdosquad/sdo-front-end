import { SELECTED_STUDENT } from "../actions/actionTypes"

const initialState = {
    group: null,
    name: null,
    gid: null
}


export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_STUDENT:
            return {
                ...state, name: action.name, group: action.group, gid: action.gid
            }
        default:
            return state
    }
}