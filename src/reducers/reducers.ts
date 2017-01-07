/**
 * @author Dzmitry Misiuk
 */

import {Action} from "../actions/actions";

export function count(state = 0, action: Action<number>) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state
    }
}
