import CounterFunctional from './CounterFunctional';
import Counter from './Counter';
import RainbowContainer from './RainbowContainer';
import ProductList from './products/ProductList';
import DemoEffect from './products/DemoEffect';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';

function Simple() {
  return <p>Simple composant fonctionnel</p>
}

function Simple2(props) {
  
  // destructuration
  const { propA, propB } = props;

  return <p>{ propA } : { propB }</p>
}

function Simple3({isOk}) {

  if (isOk) {
    return <p>Ok, tout va bien</p>
  } else {
    return <p>Ouille ! ça va mal</p>
  }
}

function Simple4({message}) {

  const btn = <button onClick={() => console.log(message)}>Simple 4</button>;
  const p = <p>Paragraphe</p>;

  return (
    <>
      { btn }
      { p }
    </>
  )
}

function App() {

  const title = "Formation React";
  const subtitle = "Initiation";
  const isOk = 2 > 1;
  const visibility = 'hidden';

  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{ title } : { subtitle }</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        {login ? 'Je suis logué' : 'Pas logué'}
      </div>

      <DemoEffect />

      <ProductList/>
    
      <div style={{visibility}}>
        <RainbowContainer/>
        <Counter initialValue={0} />
        <CounterFunctional/>
        <Simple4 message="Peu importe" />
        <Simple4 message="Click" />
        <Simple3 isOk={function() { return false; }()} />
        <Simple3 isOk={isOk} />
        <Simple2 propA="Symfony" propB="prod" />
        <Simple2 propA="React" propB="dev" />
        <Simple/>
      </div>

    </div>
  )
}

export default App;
