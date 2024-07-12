import style from "@/app/inputPost/inputPost.module.scss"

export default function inputPost() {
    return (
        <>
            <main className={style.inputWrap}>
                <h2 className={style.Title}>自分のデザインを投稿する</h2>
                <div>
                    <div>
                        <div className={style.inputFile}>
                            <p className={style.Notes}>※この画像は他のユーザーに複製されます。</p>
                        </div>
                        <input className={style.selectFile}type="file" />
                        <h3>デザイン一部抜粋の場合<span>(抜粋元のURLかファイルを添付してください)</span></h3>
                    </div>
                    <div>

                    </div>
                </div>
            </main>
        </>
    )
}