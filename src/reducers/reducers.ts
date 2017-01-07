/**
 * @author Dzmitry Misiuk
 */

import {Action} from "../actions/actions";
import {INCREMENT, DECREMENT} from "../actions/action_types"
import * as Immutable from "immutable";

var initialState = Immutable.Map({counter: 0});
export function count(state: Immutable.Map<string, any> = initialState, action: Action<number>) {
    switch (action.type) {
        case INCREMENT:
            return state.set("counter", state.get("counter") + action.payload);
        case DECREMENT:
            return state.set("counter", state.get("counter") - action.payload);
        default:
            return state
    }
}
