import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

export default function PlaylistSelection() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>nested route</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
