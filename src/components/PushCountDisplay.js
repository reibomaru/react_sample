import React from 'react';

function CountDisplay(props){
    const [count, setCount] = React.useState(0);
    return(
        <>
        <div>カウント: {count}</div>
        <button onClick={()=>{setCount(count+1)}} disabled={props.disabled}>click!!</button>
        </>
    )
}

export default CountDisplay;