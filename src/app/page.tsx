import styles from "./page.module.scss";
import Header from "@/Components/Header";
import ItemWrap from "@/Components/ItemWrap";
import Link from "next/link";
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.categoryNav}>
          <ul>
            <li><Link className={styles.Link} href="#">急上昇</Link></li>
            <li><Link className={styles.Link} href="#">ポスター</Link></li>
            <li><Link className={styles.Link} href="#">ロゴ</Link></li>
            <li><Link className={styles.Link} href="#">Webサイト</Link></li>
            <li><Link className={styles.Link} href="#">アプリ</Link></li>
            <li><Link className={styles.Link} href="#">その他</Link></li>
          </ul>
        </div>
        <div className={styles.ItemBox}>
          <ItemWrap />
        </div>
      </main>
      
    </>
  );
}
