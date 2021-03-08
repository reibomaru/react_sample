import React from 'react'
import { Link } from "react-router-dom";

function AboutPage(){
    return(
        <>
        <h1>this is top</h1>
        <h2>このサイトについて</h2>
        <p>このサイトはReactをサイトを作りながら学習するサイトです。</p>
        <h2>目次</h2>
            <ul>
                <li><Link to="/todo">todo</Link>: functional componentを使ってReactの基礎的な知識(component, props, JSX)で作成されたtodo app</li>
                <li><Link to="/about">about</Link>: 参考リンク(React Routerを勉強する際にできたページ)</li>
                <li><Link to="/count">count</Link>: React Contextを使って作成されたcount up app</li>
            </ul>
        </>
    )
}

export default AboutPage;