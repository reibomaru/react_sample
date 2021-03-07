import React from 'react'

function AboutPage(){
    return(
        <div>
            <h1>this is about</h1>
            <p>参考にしているサイト一覧</p>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Reactのドキュメント(MDN)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://qiita.com/TsutomuNakamura/items/34a7339a05bb5fd697f2">(Qita)今から始めるReact入門~React Router~</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://qiita.com/ryokkkke/items/dc25111fcf52ea579d58">(Qita)React Contextの使い方</a></li>
            </ul>
        </div>
    )
}

export default AboutPage;