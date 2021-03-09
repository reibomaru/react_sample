import React from 'react';
import { DoubledCountContext } from "../hooks/DoubledCount";

function CountDisplay(){
    const {doubledCount} = React.useContext(DoubledCountContext);
    return(
        <div>カウント: {doubledCount}</div>
    )
}

export default CountDisplay;