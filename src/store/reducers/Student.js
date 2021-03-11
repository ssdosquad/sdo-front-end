import { AUTH_LOGOUT_STUDENT, SELECTED_STUDENT } from "../actions/actionTypes"

const initialState = {
    group: null,
    name: null,
    uid: null,
    sessionStudent: null
}


export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_STUDENT:
            return {
                ...state, name: action.name, group: action.group, uid: action.uid, sessionStudent: action.sessionStudent
            }
        case AUTH_LOGOUT_STUDENT:
            return {
                ...state, name: null, group: null, uid: null, sessionStudent: null
            }
        default:
            return state
    }
}