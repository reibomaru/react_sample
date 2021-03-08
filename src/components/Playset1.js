import React from 'react';
import PushCountDisplay from './PushCountDisplay'

function Playset1(){
    const initialLimit = 10;
    const [limitTime, setLimitTime] = React.useState(initialLimit);

    React.useEffect(() => {
        const interval = setInterval(() => {
            limitTime ? setLimitTime(limitTime-1) : clearInterval(interval);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    return(
        <div>
            <h2>playset1</h2>
            <p>残り{limitTime}秒</p>
            <PushCountDisplay disabled={!limitTime}/>
        </div>
    )
}

export default Playset1;