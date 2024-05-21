import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>home page</div>
      <Link href="/project">project page</Link>
    </main>
  );
}
