import * as React from "react";
import * as ReactDOM from "react-dom";
import {Store, createStore} from "redux";
import {Hello} from "./components/Hello";

interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}

let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
const store: Store<any> = devtools(createStore)(counter);

function counter(state = 0, action: Action<number>) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state
    }
}

store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({type: 'INCREMENT', payload: 2});
store.dispatch({type: 'INCREMENT', payload: 3});


ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" version="0.1"/>,
    document.getElementById("example")
);
