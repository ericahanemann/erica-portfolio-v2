import Link from 'next/link'
import styles from "../page.module.css";

export default function Project() {
  return (
    <main className={styles.main}>
      <div>hello world!</div>
      <Link href="/">home page</Link>
    </main>
  );
}
