import React from 'react';
import CountDisplay from '../components/CountDisplay';
import CountButton from '../components/CountButton'
import { CountProvider } from '../hooks/Count'

export default function CountPage(props){

    return(
        <>
        <h1>this is count up</h1>
        <CountProvider>
            <CountDisplay />
            <CountButton />
        </CountProvider>
        </>
    )
}