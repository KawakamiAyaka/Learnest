import style from "@/Components/ItemWrap/ItemWrap.module.scss"
import Image from 'next/image'



export default function ItemWrap(){
    return(
        <>
        <div style={{
                width:'340px',
                height:'310px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexFlow:'column',
                boxShadow:'0 0 15px -5px #c9c9c9',
                borderRadius:'20px',
                margin:'10px',
                transition:'all .3s ease 0s'
            }}
            className={style.PostBox}>
            <Image
            style={{border:'#dfdfdf solid 1px'}}
            src="/iceCreamLogo.png"
            width={280}
            height={200}
            alt="作品のサムネ"
            />
            <div style={{
                    display:'flex',
                    gap:'20px',
                    marginTop:'10px'
                }}>
                <div style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'10px'
                    }}>
                    <Image
                    style={{
                        boxShadow:'0 0 2px 0 #c9c9c9',
                        borderRadius:'50%'
                    }}
                    src="/iconOne.svg"
                    width={50}
                    height={50}
                    alt="ユーザーアイコン"
                    />
                    <p>Yamada Hana</p>
                    {/* ここにランクアイコン 下記仮の図形*/}
                    <div style={{
                            width:'20px',
                            height:'20px',
                            background:'#c9c9c9',
                            borderRadius:'50%'
                        }}>
                    </div>
                </div>
                <div style={{
                        display:'flex',
                        gap:'10px',
                        alignItems:'center'
                    }}>
                    <Image
                        src="/noKeep.svg"
                        width={30}
                        height={30}
                        alt="作品のサムネ"
                        />
                    <Image
                        src="/noNice.svg"
                        width={30}
                        height={30}
                        alt="作品のサムネ"
                        />
                </div>
            </div>
        </div>
        </>
    )
}