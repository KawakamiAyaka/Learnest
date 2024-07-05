import style from "@/Components/PostBox/PostBox.module.scss"
import Image from 'next/image'
import Link from "next/link"


export default function PostBox(){
    return(
        <>
            <div style={{width:'90%',height:'70vh',margin:'20vh auto 0 auto',border:'#c9c9c9 solid 1px',boxShadow:'0 0 5px 1px #c9c9c9',borderRadius:'20px'}}>
                <div style={{width:'90%',margin:'3% auto 10px auto',display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <h1 style={{fontSize:'1.3rem'}}>アイスクリーム屋のロゴデザイン</h1>
                        <p style={{color:'#6084E7'}}>#ロゴ</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                        <Image
                        src="/noNice.svg"
                        width={35}
                        height={35}
                        alt="いいねアイコン"
                        />
                        <Image
                        src="/noKeep.svg"
                        width={35}
                        height={35}
                        alt="保存アイコン"
                        />
                        <Image
                        src="/share.svg"
                        width={35}
                        height={35}
                        alt="シェアアイコン"
                        />
                    </div>
                </div>
                <div style={{width:'90%',margin:'0 auto',display:'flex',alignItems:'center',gap:'50px'}}>
                    <Image
                    style={{width:'35%',height:'80%',objectFit:'contain',border:'#c9c9c9 1px solid'}}
                    src="/iceCreamLogo.png"
                    width={500}
                    height={350}
                    alt="作品のサムネ"
                    />
                    <div style={{margin:'auto 0',display:'flex',flexFlow:'column',gap:'40px'}}>
                        <h2>「Melty」という名の架空のアイスクリーム屋のロゴをデザイン。Meltyは溶けている状態を表す言葉。元気な子供がたくさん来店する店。</h2>
                        <div style={{background:'#d7ffd5',position:'relative',borderLeft:'15px solid #6fff65'}}>
                            <div style={{display:'flex',alignItems:'baseline'}}>
                                <p style={{fontWeight:'bold',padding:'15px 0 0 15px'}}>Point</p>
                                <Image
                                src="/light.svg"
                                width={20}
                                height={20}
                                alt="Pointの電球マーク"
                                    />
                            </div>
                            <p style={{margin:'15px'}}>溶けている状態を表現するため、アイスや背景に溶けかけている雫をつけました。また、ターゲット層が元気な子供なのでパワフルを表現するため原色の色を使いカラフルにしました。</p>
                        </div>
                    </div>
                </div>
                <div style={{width:'90%',height:'20%',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                        <Image
                        style={{boxShadow:'0 0 5px 0 #c9c9c9',borderRadius:'50%'}}
                        src="/iconOne.svg"
                        width={60}
                        height={60}
                        alt="ユーザーアイコン"
                        />
                        <p style={{fontSize:'1.5rem',fontWeight:'600'}}>Yamada Hana</p>
                        {/* ここにランクアイコン 下記仮の図形*/}
                        <div style={{width:'30px',height:'30px',background:'#c9c9c9',borderRadius:'50%'}}>

                        </div>
                    </div>
                    <Link href="/mainPost/feedback" className={style.feedbackBtn}>フィードバックする</Link>
                </div>
            </div>
        </>
    )
}