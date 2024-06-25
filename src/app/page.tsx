import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div>FRONTEND DEVELOPER</div>
        <h1 className={styles.name}>
          ERICA <br /> VANESSA <br /> HANEMANN
        </h1>
      </section>
      <Link href="/project">project page</Link>
    </main>
  );
}
