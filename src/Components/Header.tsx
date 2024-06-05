'use client';

import style from "@/styles/Components/header.module.scss"

export default function Header(){
    return(
        <>
            <header className={style.header}>
                {/* <img src="" alt="" /> */}
                <nav>
                    <ul>
                    <li><a href="">お題を見る</a></li>
                    <li><a href="">投稿する</a></li>
                    <li><a href="">プロフィール</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}