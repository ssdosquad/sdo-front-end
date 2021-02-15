
const initialState = {
    name: '',
    group: ''
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'ADDNAME':
            return {
                name:  state.name + action.name,
                group: state.group + action.group
            }
        default:
            break;
    }
    return state
}