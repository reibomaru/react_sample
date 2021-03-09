import React from 'react';
import CountDisplay from '../components/CountDisplay';
import CountButton from '../components/CountButton'
import { CountProvider } from '../hooks/Count'
import { DoubledCountProvider } from '../hooks/DoubledCount'

export default function CountPage(props){

    return(
        <>
        <h1>this is count up</h1>
        <CountProvider>
        <DoubledCountProvider>
            <CountDisplay />
            <CountButton />
        </DoubledCountProvider>
        </CountProvider>
        </>
    )
}