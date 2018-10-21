import initialState from '../constants/initialState';

import {
    SET_INITIAL_STATE,
    GET_ALL_CARDS
} from '../constants/types/actionTypes';

export default function (state = initialState.card, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_INITIAL_STATE: {
            return { ...state, "cards": [] };
        }
        case GET_ALL_CARDS: {
            return { ...state, "cards": payload};
        }
        default:
            return state;
    }
}
