// 'use client';
import Image from 'next/image'
import style from "@/styles/Components/header.module.scss"
import Link from 'next/link';

export default function Header(){
    return(
        <>
            <header className={style.header}>
                <Image
                className={style.logoImg}
                src="LarnestLogo.svg" // 必要
                width={250} // 必要
                height={96} // 必要
                alt="larnestのロゴ" //文法的に必要
                />
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <Link href="/" className={style.Link}>トップ</Link>
                        </li>
                        <li>
                            <Link href="/themaPost" className={style.Link}>お題を見る</Link>
                        </li>
                        <li>
                            <Link href="/inputPost" className={style.Link}>投稿する</Link>
                        </li>
                        <li>
                            <Link href="/profile" className={style.Link}>プロフィール</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}