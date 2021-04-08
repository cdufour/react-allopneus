import {useEffect, useState} from 'react';

const API = 'http://localhost:3005/products';

export default function DemoEffect() {

    const [product, setProduct] = useState(null);

    // similaire à componentDidMount et componentDidUpdate
    useEffect(async () => {

        // fetch(API + '/2')
        //     .then(res => res.json())
        //     .then(prod => {
        //         console.log(prod);
        //         setProduct(prod)
        //     })

        var apiResponse = await fetch(API + '/4');
        var product = await apiResponse.json();
        setProduct(product);


        console.log('effect');
    }, []);

    return(
        <div>
        {product 
            ? <span>{product.name}</span>
            : <span>No product</span>
        }
        </div>
    )
}