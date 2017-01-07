import * as React from "react";
import * as Immutable from "immutable";

export interface CounterProps {
    compiler: string;
    framework: string;
    version: number;
    increment: () => any;
    decrement: () => any;
}

const imVal = Immutable.fromJS({A: 1});

export class Counter extends React.Component<CounterProps, {}> {
    render() {
        const {compiler, framework, version, increment, decrement} = this.props;
        return <div>
            <h1>Hello from {compiler} and {framework} #{version}!</h1>
            <h2>Immutable value at key A should be {imVal.get("A")}</h2>
            <p>
                <button onClick={increment}>
                    +
                </button>
                <button onClick={decrement}>
                    -
                </button>

            </p>
        </div>;
    }
}
