import Link from 'next/link'
import styles from '../../styles/PlaylistItem.module.scss';

export function PlaylistItem({ playlist }) {
  return (

      <Link href="/vibe-viewer/playlist-detail">
        <div className={styles.container}>
          <a>
            <p><b>{playlist.name}</b></p>
            <p>{playlist.description}</p>
          </a>
          <p>pretend im another element</p>
        </div>
      </Link>
  );
}
