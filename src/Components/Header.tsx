'use client';
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
                    width={300} // 必要
                    height={96} // 必要
                    alt="Picture of the author" //文法的に必要
                    />
                    <nav className={style.nav}>
                        <ul>
                        <li><Link className={style.Link} href="#">お題を見る</Link></li>
                        <li><Link className={style.Link} href="#">投稿する</Link></li>
                        <li><Link className={style.Link} href="#">プロフィール</Link></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}