import React from 'react';
import ProductItem from './ProductItem';
import FilterProduct from './FilterProduct';

const API = 'http://localhost:3005/products';

export default class ProductList extends React.Component
{
    state = { 
        products: [],
        productsFiltered: []
    }

    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {

        // var promise = fetch(API);
        // promise
        // .then((response) => {
        //     return response.json()
        // })
        // .then(products => console.log(products))

        fetch(API)
            .then(res => res.json())
            .then(products => {
                this.setState({ 
                    products, 
                    productsFiltered: products 
                })
            })

    }

    handleFilter(searchedValue) { 

        if (searchedValue.length < 3) {
            this.setState({ productsFiltered: [...this.state.products] })
        } else {
            var productsFiltered = this.state.products.filter(
                product => product.name.indexOf(searchedValue) !== -1)
            
            this.setState({ productsFiltered })
        }
        
    }

    render() {
        // var products = [];
        // for (var i=0; i<this.state.products.length; i++) {
        //     console.log(this.state.products[i])
        //     products.push(<p key={i}>{this.state.products[i].name}</p>)
        // }

        var products = this.state.productsFiltered.map(
            product => <ProductItem data={product} key={product.id} />)

        // retour en cas de tableau vide, message d'attente
        //if (products.length === 0) return <p>Wait...</p>;

        return (
            <>
                <FilterProduct onSearch={this.handleFilter}  />
                {products}
            </>
        )
    }
}