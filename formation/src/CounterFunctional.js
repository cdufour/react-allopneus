export default function CounterFunctional() {

    var counter = 0;

    const handleClick = () => {
        counter += 1;
        console.log(counter);
    };

    return (
        <>
            <h3>Counter Component (function)</h3>
            <span>{counter}</span>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}
