import './ProductItem.css';

export default function ProductItem({data}) {

    const {id, name, price, online, stock} = data;

    const onlineMsg = online
     ? 'Disponible en ligne'
     : 'Disponible en magasin';

    return (
        <div className={'product'}>
            <h3>{name}</h3>
            <p>prix : {price}</p>
            <p>{onlineMsg}</p>
        </div>
    )
}