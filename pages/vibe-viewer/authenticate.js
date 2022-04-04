import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

export default function Authenticate() {
  // get auth token
  // context
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Spotify login</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="/vibe-viewer/playlist-selection">
            <a> Next &rarr;</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
