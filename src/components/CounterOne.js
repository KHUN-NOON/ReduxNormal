import React, { useReducer } from 'react';
import { initialValue, CounterReducer } from '../Reducers/CounterReducer'

function CounterOne() {
    const [ count, dispatch ] = useReducer(CounterReducer, initialValue)

    return (
        <div>
            <h1>Application</h1>
            <h5>Counter</h5>
            <div>Count - {count.plus}</div>
            <button onClick={ () => dispatch({ type: 'increasement', value: 1}) }>Increasement</button>
            <button onClick={ () => dispatch({ type: 'decreasement', value: 1}) }>Decreasement</button>
            <button onClick={ () => dispatch({type: 'reset', value: initialValue}) }>Reset</button>
        </div>
    )
}

export default CounterOne



