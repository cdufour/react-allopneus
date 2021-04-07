import { Component } from 'react';

const COLORS = ['green', 'red', 'blue', 'pink', 'orange', 'black'];

export default class Rainbow extends Component
{
    state = { color: 'blue', intervalId: null };

    componentDidMount() {
        //this.startAnim();
    }

    startAnim() {
        let intervalId = setInterval(() => {
            this.setState({color: this.randomColor()})
        }, this.props.speed);

        this.setState({intervalId})
    }

    stopAnim() {
        clearInterval(this.state.intervalId);
        this.setState({intervalId: null})
    }

    toggleAnim() {
        if (!this.state.intervalId) {
            this.startAnim();
        } else {
            this.stopAnim();
        }
    }

    randomColor() {
        var index = Math.floor(Math.random() * COLORS.length);
        return COLORS[index];
    }

    render() {
        const styles = { 
            width: 100, 
            height: 100, 
            backgroundColor: this.state.color 
        };

        return(
            <>
                <div style={styles}>
                    {this.props.isOn &&
                        <span>Anim On</span>
                    }
                </div>
                <button onClick={() => this.toggleAnim() }>On/Off local</button>
            </>
        );
    }
}