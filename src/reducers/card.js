import initialState from '../constants/initialState';

import {
    SET_INITIAL_STATE,
    GET_ALL_CARDS,
    ADD_CARD_TO_USER,
    REMOVE_CARD_FROM_USER
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
        case ADD_CARD_TO_USER: {
            return { ...state, "cards": state.cards.map( (card) => {
                    if(card._id === payload._id) {
                        return payload;
                    }
                    return card;
                })};
        }
        case REMOVE_CARD_FROM_USER: {
            return { ...state, "cards": state.cards.map( (card) => {
                    if(card._id === payload._id) {
                        return payload;
                    }
                    return card;
                })};
        }
        default:
            return state;
    }
}
