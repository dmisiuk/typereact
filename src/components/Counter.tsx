import * as React from "react";

export interface CounterProps {
    compiler: string;
    framework: string;
    version: number;
    increment: () => any;
    decrement: () => any;
}

export class Counter extends React.Component<CounterProps, {}> {
    render() {
        const {compiler, framework, version, increment, decrement} = this.props;
        return <div>
            <h1>Hello from {compiler} and {framework} #{version}!</h1>
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
