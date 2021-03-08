import React from 'react';
import Playset1 from '../components/Playset1'
import Playset2 from '../components/Playset2'

function PushPage(){
    const [showPlayset1, setShowPlayset1] = React.useState(false);
    const [showPlayset2, setShowPlayset2] = React.useState(false);
    return(
        <>
        <h1>this is push</h1>
        <p>10秒以内にできるだけ多くのボタンを押せ！</p>
        <div style={{display:"inline-block",marginRight:"10px"}}>
            <p>playset1</p>
            <input type="button" value="start" onClick={()=>{setShowPlayset1(!showPlayset1);}} disabled={showPlayset1||showPlayset2}/>
            <input type="button" value="end" onClick={()=>{setShowPlayset1(!showPlayset1)}} disabled={!showPlayset1}/>
        </div>
        <div style={{display:"inline-block"}}>
            <p>playset2</p>
            <input type="button" value="start" onClick={()=>{setShowPlayset2(!showPlayset2);}} disabled={showPlayset2||showPlayset1}/>
            <input type="button" value="end" onClick={()=>{setShowPlayset2(!showPlayset2)}} disabled={!showPlayset2}/>
        </div>

        {showPlayset1 ? <Playset1 /> : null}
        {showPlayset2 ? <Playset2 /> : null}
        </>
    )
}

export default PushPage;