import * as React from "react";
import * as Immutable from "immutable";

export interface HelloProps { compiler: string; framework: string; version: number}

const imVal = Immutable.fromJS({A: 1});

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}-{this.props.version}!</h1>
            <h2>Immutable value at key A should be {imVal.get("A")}</h2>
        </div>;
    }
}
