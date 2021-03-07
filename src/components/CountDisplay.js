import React from 'react';
import { CountContext } from '../hooks/Count'

function CountDisplay(){
    const {count, setCount} = React.useContext(CountContext);
    return(
        <div>カウント: {count}</div>
    )
}

export default CountDisplay;