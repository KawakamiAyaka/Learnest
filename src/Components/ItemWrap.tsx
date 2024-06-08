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
            src="/iceCreamLogo.png" // 必要
            width={300} // 必要
            height={200} // 必要
            alt="作品のサムネ" //文法的に必要
            />
            <div className={style.about}>
                <div className={style.User}>
                    <Image
                    className={style.userIcon}
                    src="/iconOne.svg" // 必要
                    width={50} // 必要
                    height={50} // 必要
                    alt="ユーザーアイコン" //文法的に必要
                    />
                    <p>Yamada Hana</p>
                    {/* ここにランクアイコン 下記仮の図形*/}
                    <div className={style.rankIcon}></div>
                    
                </div>
                <div className={style.actionBtn}>
                    <Image
                        className={style.keep}
                        src="/noKeep.svg" // 必要
                        width={20} // 必要
                        height={20} // 必要
                        alt="作品のサムネ" //文法的に必要
                        />
                    <Image
                        className={style.nice}
                        src="/noNice.svg" // 必要
                        width={20} // 必要
                        height={20} // 必要
                        alt="作品のサムネ" //文法的に必要
                        />
                </div>
            </div>
        </div>
        </>
    )
}