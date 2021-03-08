import React, {useState} from 'react';

export const CountContext = React.createContext("");
export function CountProvider(props){
    const [count, setCount] = useState(0);
    return(
        <CountContext.Provider value = {{count, setCount}}>
            {props.children}
        </CountContext.Provider>
    )
}