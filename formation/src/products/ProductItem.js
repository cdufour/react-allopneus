import './ProductItem.css';
import StockLevel from './StockLevel';

export default function ProductItem({data}) {

    const {id, name, price, online, stock} = data;

    const onlineMsg = online
     ? 'Disponible en ligne'
     : 'Disponible en magasin';

    return (
        <div className={'product'}>
            <h3>{name}</h3>
            <p>prix : {price}</p>
            <div>
                {onlineMsg}
                <StockLevel stock={stock}/>
            </div>
        </div>
    )
}