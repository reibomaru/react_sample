import React from 'react';

function Playset(){
    const initialLimit = 10;
    const [count, setCount] = React.useState(0);
    const [limitTime, setLimitTime] = React.useState(initialLimit);

    React.useEffect(() => {
        const interval = setInterval(() => {
            limitTime ? setLimitTime(limitTime-1) : clearInterval(interval);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [limitTime]);

    return(
        <div>
            <h2>playset2</h2>
            <p>残り{limitTime}秒</p>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}} disabled={!limitTime}>click!!</button>
        </div>
    )
}

export default Playset;