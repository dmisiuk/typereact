import * as React from "react";
import * as ReactDOM from "react-dom";
import {Store, createStore} from "redux";
import {Counter} from "./components/Counter";
import {count} from "./reducers/reducers";
import {incrementAction, decrementAction} from "./actions/actions";
import * as Immutable from "immutable";

let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
const store: Store<Immutable.Map<string, any>> = devtools(createStore)(count);

const render = () => ReactDOM.render(
    <Counter compiler="TypeScript"
             framework="React"
             version={store.getState().get("counter")}
             increment={() => store.dispatch(incrementAction())}
             decrement={()=> store.dispatch(decrementAction())}/>,
    document.getElementById("example")
);

render();
store.subscribe(render);
