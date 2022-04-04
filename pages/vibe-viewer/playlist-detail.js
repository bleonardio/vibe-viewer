import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

// todo paths extracted to const
export default function PlaylistDetail() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Here's your playlist</h1>
        <p className={styles.description}>
          <Link href="/vibe-viewer/playlist-selection">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
