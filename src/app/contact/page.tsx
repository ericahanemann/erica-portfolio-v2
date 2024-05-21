import Link from 'next/link'
import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div>contact page</div>
      <Link href="/">home page</Link>
    </main>
  );
}
