import { Component } from 'react';
import Rainbow from './Rainbow';


export default class RainbowContainer extends Component
{
    state = { isOn: false }

    handleClick() {
        this.setState({isOn: !this.state.isOn});
    }

    render() {

        var btnText = this.state.isOn ? 'Off' : 'On';

        return(
            <>
                <Rainbow speed={2000} isOn={this.state.isOn} />
                <button onClick={() => this.handleClick() }>
                    {btnText}
                </button>
            </>
        )
    }
}