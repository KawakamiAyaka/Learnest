import style from "@/app/profile/profile.module.scss"
import ItemWrap from "@/Components/ItemWrap/ItemWrap"
import Link from "next/link"


export default function profile() {
    return (
        <>
            <main className={style.main}>
                <div className={style.markWrap}>
                    <ul className={style.nav}>
                        <li><Link href="#">保存済み</Link></li>
                        <li><Link href="#">投稿アーカイブ</Link></li>
                        <li><Link href="#">フィードバックアーカイブ</Link></li>
                    </ul>
                <div className={style.marlBox}>
                <Link href="/mainPost"><ItemWrap/></Link>
                <Link href="/mainPost"><ItemWrap/></Link>
                <Link href="/mainPost"><ItemWrap/></Link>
                <Link href="/mainPost"><ItemWrap/></Link>
                <Link href="/mainPost"><ItemWrap/></Link>
                </div>
                </div>
                <div className={style.profileWrap}>
                    <div className={style.profile}>

                    </div>
                </div>
            </main>
        </>
    )
}