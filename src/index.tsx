import * as React from "react";
import * as ReactDOM from "react-dom";
import {Store, createStore} from "redux";
import {Counter} from "./components/Counter";
import {count} from "./reducers/reducers";
import {INCREMENT, DECREMENT} from "./actions/action_types";

let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
const store: Store<number> = devtools(createStore)(count);

store.subscribe(() =>
    console.log(store.getState())
);

const render = () => ReactDOM.render(
    <Counter compiler="TypeScript"
             framework="React"
             version={store.getState()}
             increment={() => store.dispatch({type: INCREMENT, payload: 1})}
             decrement={()=> store.dispatch({type: DECREMENT, payload: 1})}/>,
    document.getElementById("example")
);

render();
store.subscribe(render);
