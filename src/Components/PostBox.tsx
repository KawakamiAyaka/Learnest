import style from "@/styles/Components/PostBox.module.scss"
import Image from 'next/image'
import Link from "next/link"


export default function PostBox(){
    return(
        <>
            <div className={style.PostBox}>
                <div className={style.top}>
                    <div>
                        <h1 className={style.title}>アイスクリーム屋のロゴデザイン</h1>
                        <p className={style.category}>#ロゴ</p>
                    </div>
                    <div className={style.actionBtn}>
                        <Image
                        className={style.nice}
                        src="/noNice.svg"
                        width={35}
                        height={35}
                        alt="いいねアイコン"
                        />
                        <Image
                        className={style.keep}
                        src="/noKeep.svg"
                        width={35}
                        height={35}
                        alt="保存アイコン"
                        />
                        <Image
                        className={style.share}
                        src="/share.svg"
                        width={35}
                        height={35}
                        alt="シェアアイコン"
                        />
                    </div>
                </div>
                <div className={style.PostContent}>
                    <Image
                    className={style.designImg}
                    src="/iceCreamLogo.png"
                    width={500}
                    height={350}
                    alt="作品のサムネ"
                    />
                    <div className={style.contentBox}>
                        <h2 className={style.Text}>「Melty」という名の架空のアイスクリーム屋のロゴをデザイン。Meltyは溶けている状態を表す言葉。元気な子供がたくさん来店する店。</h2>
                        <div className={style.pointBox}>
                            <div className={style.pointTitle}>
                                <p>Point</p>
                                <Image
                                className={style.pointImg}
                                src="/light.svg"
                                width={20}
                                height={20}
                                alt="Pointの電球マーク"
                                    />
                            </div>
                            <p className={style.pointText}>溶けている状態を表現するため、アイスや背景に溶けかけている雫をつけました。また、ターゲット層が元気な子供なのでパワフルを表現するため原色の色を使いカラフルにしました。</p>
                        </div>
                    </div>
                </div>
                <div className={style.contentBtm}>
                    <div className={style.User}>
                        <Image
                        className={style.userIcon}
                        src="/iconOne.svg"
                        width={60}
                        height={60}
                        alt="ユーザーアイコン"
                        />
                        <p>Yamada Hana</p>
                        {/* ここにランクアイコン 下記仮の図形*/}
                        <div className={style.rankIcon}>

                        </div>
                    </div>
                    <Link href="/mainPost/feedback" className={style.feedbackBtn}>フィードバックする</Link>
                </div>
            </div>
        </>
    )
}