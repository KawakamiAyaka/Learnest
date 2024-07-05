import styles from "./page.module.scss";
import ItemWrap from "@/Components/ItemWrap/ItemWrap";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main style={{width:'100%'}}>
        <div style={{marginTop:'100px'}}>
          <ul style={{display:'flex',justifyContent:'center',gap:'30px',listStyleType:'none'}}>
            <li><Link href="#">急上昇</Link></li>
            <li><Link href="#">ポスター</Link></li>
            <li><Link href="#">ロゴ</Link></li>
            <li><Link href="#">Webサイト</Link></li>
            <li><Link href="#">アプリ</Link></li>
            <li><Link href="#">その他</Link></li>
          </ul>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
          <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center',}}>
            <Link href="/mainPost"><ItemWrap/></Link>
          </div>
        </div>
      </main>
    </>
  );
}
