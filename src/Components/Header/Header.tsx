// 'use client';
import Image from 'next/image'
import style from "@/Components/Header/Header.module.scss"
import Link from 'next/link';

export default function Header(){
    return(
        <>
            <header style={{background:'white',boxShadow:'0px 0px 10px -5px #777777',width:'100%',height:'10vh',position:'fixed',zIndex:'1000',top:'0',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Image
                style={{marginLeft:'20px'}}
                src="LearnestLogo.svg"
                width={250}
                height={96}
                alt="larnestのロゴ"
                />
                <nav>
                    <ul style={{display:'flex',listStyleType:'none',}}>
                        <li style={{margin:'0 10px',width:'8rem',height:'2.5rem',textAlign:'center',lineHeight:'2.5rem'}}>
                            <Link href="/" style={{position:'relative',textDecoration:'none',fontWeight:'bold'}} className={style.Link}>トップ</Link>
                        </li>
                        <li style={{margin:'0 10px',width:'8rem',height:'2.5rem',textAlign:'center',lineHeight:'2.5rem'}}>
                            <Link href="/themaPost" style={{position:'relative',textDecoration:'none',fontWeight:'bold'}} className={style.Link}>お題を見る</Link>
                        </li>
                        <li style={{margin:'0 10px',width:'8rem',height:'2.5rem',textAlign:'center',lineHeight:'2.5rem'}}>
                            <Link href="/inputPost" style={{position:'relative',textDecoration:'none',fontWeight:'bold'}} className={style.Link}>投稿する</Link>
                        </li>
                        <li style={{margin:'0 10px',width:'8rem',height:'2.5rem',textAlign:'center',lineHeight:'2.5rem'}}>
                            <Link href="/profile" style={{position:'relative',textDecoration:'none',fontWeight:'bold'}} className={style.Link}>プロフィール</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}