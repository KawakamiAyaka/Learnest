import style from "@/styles/Components/ItemWrap.module.scss"
import Image from 'next/image'



export default function ItemWrap(){
    return(
        <>
        <div className={style.itemWrap}>
            <div className={style.timeWrap}>
            <p className={style.time}>1時間前</p>
            </div>
            <Image
            className={style.designImg}
            src="/iceCreamLogo.png"
            width={250}
            height={150}
            alt="作品のサムネ"
            />
            <div className={style.about}>
                <div className={style.User}>
                    <Image
                    className={style.userIcon}
                    src="/iconOne.svg"
                    width={35}
                    height={35}
                    alt="ユーザーアイコン"
                    />
                    <p>Yamada Hana</p>
                    {/* ここにランクアイコン 下記仮の図形*/}
                    <div className={style.rankIcon}></div>
                    
                </div>
                <div className={style.actionBtn}>
                    <Image
                        className={style.keep}
                        src="/noKeep.svg"
                        width={20}
                        height={20}
                        alt="作品のサムネ"
                        />
                    <Image
                        className={style.nice}
                        src="/noNice.svg"
                        width={20}
                        height={20}
                        alt="作品のサムネ"
                        />
                </div>
            </div>
        </div>
        </>
    )
}