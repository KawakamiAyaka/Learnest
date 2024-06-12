import style from "@/styles/Components/PostBox.module.scss"
import Image from 'next/image'


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

            </div>
        </>
    )
}