import React, {useState, useEffect, useContext} from 'react';
import {CountContext} from './Count';

export const DoubledCountContext = React.createContext("");
export function DoubledCountProvider(props){
    const [doubledCount, setDoubleCount] = useState(0);
    const {count, setCount} = useContext(CountContext);
    useEffect(() => {
        setDoubleCount(count*2);
        return () => {
            // cleanup
        };
    }, [count]);
    return(
        <DoubledCountContext.Provider value = {{doubledCount}}>
            {props.children}
        </DoubledCountContext.Provider>
    )
}