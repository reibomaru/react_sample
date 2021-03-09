import React from 'react';
import { CountContext } from '../hooks/Count'

function CountButton(){
    const {count, setCount} = React.useContext(CountContext);
    function countUp(){
        setCount(count+1);
    }

    return(
        <>
        <input type="button" onClick={countUp} value="カウントアップ" />
        </>
    )
}

export default CountButton;