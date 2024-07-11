'use client';

import { useState } from 'react';
import Image from 'next/image'
import style from "@/app/themaPost/themaPost.module.scss";
import Link from "next/link";
import ItemWrap from "@/Components/ItemWrap/ItemWrap";

export default function ThemaPost() {
  // ドロップダウンの表示状態を管理するstate
    const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  // ドロップダウンの表示状態を切り替える関数
    const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <>  
            <main style={{
                    width:'100%'
                }}>
                <div style={{
                    padding:'10vh',
                    margin:'auto',
                    width:'60%',
                    display:'flex',
                    flexFlow:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    }}>
                    <p style={{
                        textAlign:'center',
                        fontSize:'1.2rem',
                        margin:'50px 0 30px 0',
                        }}>今回のデザインテーマ</p>
                    {/* クリックイベントを追加 */}
                    <div onClick={toggleDropdown}>
                        <h1 className={style.thema}>音楽フェスOsaka Summer Beatsのポスター作成依頼</h1>
                        {/* 条件付きレンダリングでドロップダウンを表示 */}
                        
                        {isDropdownVisible && (
                        <div style={{
                            background:'#D4E8FF',
                            position:'relative',
                            top:'15px',
                            // width:'100%'
                            }}>
                        {/* ドロップダウンの内容 */}
                            <div style={{
                                width:'90%',
                                margin:'auto',
                                padding:'20px' 
                                }} >
                                <h2 className={style.h2}>記載事項</h2>
                                <ul>
                                    <li><p><span>音楽フェスの名前</span>：「Osaka Summer Beats」</p></li>
                                    <li><p><span>開催日時、時間</span>：2024年8月15日　午後1時から午後10時まで</p></li>
                                    <li><p><span>チケット情報</span>：一般入場　5000円、学生　3000円<br></br>※チケットはフェスティバルのwebサイトで購入可能</p></li>
                                    <li><p><span>場所</span>：大阪城公園</p></li>
                                    <li><p><span>出演者</span>：メイン「The Rising Suns」、「Moonlight Melodies」　地元バンド「Osaka Soundwave」</p></li>
                                    <li><p><span>協賛</span>：「Suntory」、「Yamaha」、「Tower Records」</p></li>
                                </ul>
                                <h2 className={style.h2}>その他情報</h2>
                                <ul>
                                    <li><p><span>目的</span>：イベントの告知、認知度を高める、チケットの販売促進</p></li>
                                    <li><p><span>ターゲット</span>：音楽が好きな学生、ファミリー</p></li>
                                    <li><p>フードトラックとビールガーデンが設置され、全ての年齢層が楽しめる家族向けエリアもあります。</p></li>
                                </ul>
                                <h3 className={style.h2}>提供Harmony Design Studios様</h3>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <Link className={style.joinBtn} href="#">お題投稿に参加する</Link>
                <div style={{textAlign:'center'}}>
                    <p style={{
                        margin:'100px 0 10px 0',
                        fontWeight:'bold'
                    }}>他の参加しているユーザーの投稿</p>
                    <Image className={style.downIcon}
                    src="DownArrow.svg" // 必要
                    width={15} // 必要
                    height={15} // 必要
                    alt="下向き矢印のアイコン" //文法的に必要
                    />
                </div>
                <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center',}}>
                <Link href="/mainPost"><ItemWrap/></Link>
                </div>

            </main>
        </>
    );
}


