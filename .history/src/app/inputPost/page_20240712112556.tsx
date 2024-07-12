import style from "@/app/inputPost/inputPost.module.scss"

export default function inputPost() {
    return (
        <>
            <main className={style.input}>
                <h2 className={style.Title}>自分のデザインを投稿する</h2>
                <div className={style.inputWrap}>
                    <div>
                        <div className={style.inputFile}>
                            <p className={style.Notes}>※この画像は他のユーザーに複製されます。</p>
                        </div>
                        <input className={style.selectFile}type="file" />
                        <div className={style.ExcerptWrap}>
                            <h3>デザイン一部抜粋の場合<span>(抜粋元のURLかファイルを添付してください)</span></h3>
                            <input className={style.inputUrl} type="url" placeholder="URLを添付" name="URL" value=""/>
                        </div>
                            <input className={style.selectFile} type="file" />
                    </div>
                    <div>
                        <div>
                            <h3>タイトル</h3>
                            <input className={style.inputTitle} type="text" placeholder="タイトルを入力" name="title" value=""/>
                        </div>
                        <div>
                            <h3>説明文</h3>
                            <textarea className={style.explanation}  placeholder="詳しい説明を入力" name="explanation" value=""/>
                        </div>
                            <h3>タイトル</h3>
                            <input className={style.inputTitle} type="text" placeholder="タイトルを入力"/>
                            <h3>タイトル</h3>
                            <input className={style.inputTitle} type="text" placeholder="タイトルを入力"/>
                    </div>
                </div>
            </main>
        </>
    )
}