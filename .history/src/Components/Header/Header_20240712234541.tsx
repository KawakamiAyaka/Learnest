// 'use client';
import Image from 'next/image'
import style from "@/Components/Header/Header.module.scss"
import Link from 'next/link';

export default function Header(){
    return(
        <>
            <header className={style.header}>
                <Image
                className={style.LogoImg}
                src="LearnestLogo.svg"
                width={250}
                height={96}
                alt="larnestのロゴ"
                />
                <nav>
                    <ul className={style.navWrap}>
                        <li className={style.navBtn}>
                            <Link href="/" 
                                style={{
                                    position:'relative',
                                    textDecoration:'none',
                                    fontWeight:'bold'
                                }}
                                className={style.Link}>トップ</Link>
                        </li>
                        <li className={style.navBtn}>
                            <Link href="/themaPost" 
                                style={{
                                    position:'relative',
                                    textDecoration:'none',
                                    fontWeight:'bold'
                                }} 
                                className={style.Link}>お題を見る</Link>
                        </li>
                        <li className={style.navBtn}>
                            <Link href="/inputPost" 
                                style={{
                                    position:'relative',
                                    textDecoration:'none',
                                    fontWeight:'bold'
                                }} 
                                className={style.Link}>投稿する</Link>
                        </li>
                        <li className={style.navBtn}>
                            <Link href="/profile" 
                                style={{
                                    position:'relative',
                                    textDecoration:'none',
                                    fontWeight:'bold'
                                }}
                                className={style.Link}>プロフィール</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}