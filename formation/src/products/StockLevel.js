import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../actions';

export default function StockLevel({stock}) {

    const [visibility, setVisibility] = useState('hidden');

    var h = 10, c = "red";

    if (stock >= 0 && stock < 11) {

    } else if (stock >= 11 && stock < 51) {
        h = 20;
        c = "orange";
    } else if (stock >= 51) {
        h = 30;
        c = "green";
    }

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);

    return(
        <>
            <svg
                onMouseEnter={() => setVisibility('visible') }
                onMouseLeave={() => setVisibility('hidden')  }
                width="10" height={h} xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height={h} fill={c} />
            </svg>
            <span style={{visibility}}>{stock}</span>
            <button onClick={() => dispatch(signIn())}>
                Log {login ? 'Out' : 'In'}
            </button>
        </>
    )
}