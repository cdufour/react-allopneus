import React from "react"

export default class FilterProduct extends React.Component
{
    state = { search: '' }

    constructor(props) {
        super(props);

        // explicit this binding
        this.handleInput = this.handleInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleInput(event) {
        var searchedValue = event.target.value;
        this.props.onSearch(searchedValue);
        this.setState({search: searchedValue})
    }

    clearInput() {
        this.setState({search: ''})
        this.props.onSearch('');
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <input 
                    style={{ width: 200 }}
                    value={this.state.search}
                    type="text"
                    //onKeyUp={this.handleInput} 
                    onChange={this.handleInput}
                    />
                <span onClick={this.clearInput}>X</span>
            </div>
        )
    }

}