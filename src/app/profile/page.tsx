import style from "@/app/profile/profile.module.scss";
import ItemWrap from "@/Components/ItemWrap/ItemWrap";
import Image from "next/image";
import Link from "next/link";

export default function profile() {
    return (
        <>
            <main className={style.main}>
                <div className={style.markWrap}>
                    <ul className={style.nav}>
                        <li>
                            <Link href="#">保存済み</Link>
                        </li>
                        <li>
                            <Link href="#">投稿アーカイブ</Link>
                        </li>
                        <li>
                            <Link href="#">フィードバックアーカイブ</Link>
                        </li>
                    </ul>
                    <div className={style.marlBox}>
                        <Link href="/mainPost">
                            <ItemWrap />
                        </Link>
                        <Link href="/mainPost">
                            <ItemWrap />
                        </Link>
                        <Link href="/mainPost">
                            <ItemWrap />
                        </Link>
                        <Link href="/mainPost">
                            <ItemWrap />
                        </Link>
                        <Link href="/mainPost">
                            <ItemWrap />
                        </Link>
                    </div>
                </div>
                <div className={style.profileWrap}>
                    <div className={style.profile}>
                        <div className={style.rankUp}>
                            <Image src="syokyuu3.svg" width={60} height={60} alt="初級1" />
                            <progress className={style.file} id="file" max="100" value="70">
                                {/* 70% */}
                            </progress>
                            <Image src="tyuukyuu1.svg" width={60} height={60} alt="中級1" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
