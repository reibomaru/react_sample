import React from 'react';
import { nanoid } from "nanoid";
import Image from '../components/Image'

function DogPage(){
    const initialImage = [];
    function imagesReducer(state, action){
        switch(action.type){
            case 'add':
                const id = nanoid();
                return [...state, {id: id}];
            case 'delete':
                return state.filter(elem => action.payload.id !== elem.id);
            default:
                return state;
        }
    }
    const [imageState, imageDispatch] = React.useReducer(imagesReducer, initialImage);

    function releaseDog(id){
        imageDispatch({type: 'delete', payload: {id: id}});
    }

    const imageElemList = imageState.map(elem => {
        return(
            <Image key={elem.id} id={elem.id} release={releaseDog}/>
        )
    })

    return(
        <>
        <h1>this is dog page</h1>
        <button onClick={()=>{imageDispatch({type: 'add'})}}>犬を買う</button>
        <hr/>
        {imageElemList}
        </>
    )
}

export default DogPage;
