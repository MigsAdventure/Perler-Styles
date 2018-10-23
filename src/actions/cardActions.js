import {
    ADD_CARD_TO_USER,
    REMOVE_CARD_FROM_USER,
    GET_ALL_CARDS
} from '../constants/types/actionTypes';

import { API } from "../constants/config";

const get_all_cards = (payload) => {
    return {
        type: GET_ALL_CARDS,
        payload: payload.data
    };
};

export function getAllCards() {
    return dispatch => {
        API.get('/card')
            .then(res => {
                dispatch(get_all_cards(res));
            })
            .catch(err => {
                console.log(err);
                // need error handling here
            });
    }
}

const add_user_card = (user_details) => {
    return {
        type: ADD_CARD_TO_USER,
        payload: (user_details.data)
    };
};

export function addCard(card_id, user_details) {
    return dispatch => {
        API.post(`/card/${card_id}`, user_details)
            .then(res => {
                dispatch(add_user_card(res));
            })
            .catch(err => {
                console.log(err);
                // need error handling here
            });
    }
}

const remove_user_card = (user_details) => {
    return {
        type: REMOVE_CARD_FROM_USER,
        payload: (user_details.data)
    };
};

export function removeCard(card_id, user_details) {
    return dispatch => {
        API.put(`/card/${card_id}`, user_details)
            .then(res => {
                dispatch(remove_user_card(res));
            })
            .catch(err => {
                console.log(err);
                // need error handling here
            });
    }
};