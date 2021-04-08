import React, {createRef} from "react"

export default class ProductSearch extends React.Component
{

    constructor(props) {
        super(props);

        // explicit this binding
        this.handleInput = this.handleInput.bind(this);
        this.clearInput = this.clearInput.bind(this);

        this.searchRef = createRef();
    }

    handleInput(event) {
        var searchedValue = event.target.value;
        this.props.onSearch(searchedValue);
    }

    clearInput() {
        this.props.onSearch('');
        this.searchRef.current.value = '';
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <input
                    ref={this.searchRef}
                    style={{ width: 200 }}
                    type="text"
                    onKeyUp={this.handleInput} 
                    />
                <span onClick={this.clearInput}>X</span>
            </div>
        )
    }

}