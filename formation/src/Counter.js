import { Component } from 'react';

export default class Counter extends Component
{
    
    constructor(props) {
        super(props);
        this.state = { counter: props.initialValue };
    }

    handleClick() {
        //this.state.counter += 1; !!! Le state ne se modifie que par setState() !!!
        if (this.state.counter >= 10) {
            this.setState({ counter: 0 });
        } else {
            this.setState({ counter: this.state.counter + 1 });
        }
    }

    render() {
        return (
            <>
                <h3>Counter Component (class)</h3>
                <span>{ this.state.counter }</span>
                <button onClick={ () => this.handleClick() }>Increment</button>
            </>
        )
    }
}