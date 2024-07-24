import style from "@/Components/ItemWrap/ItemWrap.module.scss";
import Image from "next/image";

export default function ItemWrap() {
    return (
        <>
            <div className={style.PostBox}>
                <Image
                    style={{ border: "#dfdfdf solid 1px" }}
                    src="/iceCreamLogo.png"
                    width={280}
                    height={200}
                    alt="作品のサムネ"
                />
                <div className={style.nameAction}>
                    <div className={style.userName}>
                        <Image
                            style={{ boxShadow: "0 0 2px 0 #c9c9c9", borderRadius: "50%" }}
                            src="/iconOne.svg"
                            width={50}
                            height={50}
                            alt="ユーザーアイコン"
                        />
                        <p>Yamada Hana</p>
                        {/* ここにランクアイコン 下記仮の図形*/}
                        <div className={style.rankIcon}></div>
                    </div>
                    <div className={style.actionBtn}>
                        <Image src="/noKeep.svg" width={30} height={30} alt="作品のサムネ" />
                        <Image src="/noNice.svg" width={30} height={30} alt="作品のサムネ" />
                    </div>
                </div>
            </div>
        </>
    );
}
