import {USERS_LIST_SUCCESS} from "../../actions/users";

const initialState = {
    usersList: [],
}

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {

        case USERS_LIST_SUCCESS:
            return {
                ...state,
                usersList: payload,
            }

        default: return state;
    }
}