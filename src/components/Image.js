import axios from 'axios';
import React, {useReducer, useEffect} from 'react';

function Image(props){
    const initialState = {
        isLoading: true,
        url: null,
        name: null,
        error: null,
    }
    function resReducer(state, action){
        switch(action.type){
            case 'PENDING':
                return{
                    isLoading: true,
                    url: null,
                    name: null,
                    error: null,
                };
            case 'SUCCEEDED':
                return{
                    isLoading: false,
                    url: action.payload.url,
                    name: action.payload.name,
                    error: null,
                };
            case 'FAILED':
                return{
                    isLoading: false,
                    url: null,
                    name: null,
                    error: action.error,
                };
            default:
                return state;
        }
    }
    const [resState, dispath] = useReducer(resReducer, initialState);

    useEffect(() => {
        async function getData(){
            try {
                const resName = await axios.get('https://randomuser.me/api/');
                const resUrl = await axios.get('https://dog.ceo/api/breeds/image/random');
                dispath({type: "SUCCEEDED", payload: {name: resName.data.results[0].name.first, url: resUrl.data.message}});
            } catch (error) {
                dispath({type: "FAILED", error: error.toString()});
            }
        }
        getData();
        return () => {
            alert('ばいばーい');
        };
    }, []);
    return(
        <>
        <p>id: {props.id}</p>
        <div>
            {resState.isLoading ? <h3>now loading...</h3> : null }
            {resState.name ? <p>name: {resState.name}</p> : null }
            {resState.url ? <img style={{height: '200px'}} src={resState.url}/> : null }
            {resState.error ? <p>{resState.error}</p> : null}
        </div>
        <button onClick={()=>{props.release(props.id)}}>手放す</button>
        <hr/>
        </>
    )
}

export default Image;