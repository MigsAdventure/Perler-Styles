import {
    ADD_CARD_TO_USER,
    REMOVE_CARD_FROM_USER,
    GET_ALL_CARDS
} from '../constants/types/actionTypes';

import { API } from "../constants/config";

const get_all_cards = (cards) => {
    return {
        type: GET_ALL_CARDS,
        payload: cards
    };
};

export function getAllCards() {
    return dispatch => {
        API.get('/card')
            .then(res => {
                console.log('res: ', res);
                dispatch(get_all_cards(res));
            })
            .catch(err => {
                console.log(err);
                // need error handling here
            });

    }
};

const add_user_card = (user_details) => {
    return {
        type: ADD_CARD_TO_USER,
        payload: (user_details)
    };
};

export function addCard(user) {
    return dispatch => {
        dispatch(add_user_card(user));
    }
};

const remove_user_card = (user_details) => {
    return {
        type: REMOVE_CARD_FROM_USER,
        payload: (user_details)
    };
};

export function removeCard(user) {
    return dispatch => {
        dispatch(add_user_card(user));
    }
};