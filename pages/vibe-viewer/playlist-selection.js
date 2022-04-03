import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

export default function PlaylistSelection() {
  // user has no playlists?
  // paginate & search
  // dynamic path to detail page
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Select a Playlist</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="/vibe-viewer/playlist-detail">
            <a> Next &rarr;</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
