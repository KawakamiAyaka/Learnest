import styles from "./page.module.scss";
import ItemWrap from "@/Components/ItemWrap";
import Link from "next/link";


export default function Home() {
  return (
    <>
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
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        </div>
        <div className={styles.ItemBox}>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        </div>
        <div className={styles.ItemBox}>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        </div>
        <div className={styles.ItemBox}>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        <Link className={styles.ItemLink} href="/mainPost"><ItemWrap /></Link>       
        </div>
      </main>
      
    </>
  );
}
