

export default function inputPost() {
    return (
        <>
            <main style={{
                    width:'100%',
                    height:'100vh',
                    marginTop:'8%'
                    }}>
                <h2 style={{fontSize:'1.3rem'}}>自分のデザインを投稿する</h2>
                <div>
                    <div>
                        <div style={{
                            background:'#E2E7EC',
                            width:'30%',
                            height:'40vh',
                            border:'dotted 2px #333'
                            }}>
                            <input type="file" />
                        </div>
                        <p style={{}}>※この画像は他のユーザーに複製されます。</p>
                    </div>
                    <div>

                    </div>
                </div>
            </main>
        </>
    )
}