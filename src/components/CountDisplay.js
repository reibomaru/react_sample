import React from 'react';
import { CountContext } from '../hooks/Count'

function CountDisplay(){
    const {count} = React.useContext(CountContext);
    return(
        <div>カウント: {count}</div>
    )
}

export default CountDisplay;