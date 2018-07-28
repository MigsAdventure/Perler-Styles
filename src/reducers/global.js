import initialState from '../constants/initialState';

import {
    SET_INITIAL_STATE
} from '../constants/types/actionTypes';

export default function (state = initialState.global, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_INITIAL_STATE: {
            return { ...state, "is_loading": true };
        }
        default:
            return state;
    }
}
