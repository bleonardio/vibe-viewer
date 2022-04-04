import { PlaylistItem } from "./PlaylistItem";
import styles from '../../styles/Playlists.module.scss';

export function Playlists({ playlists }) {
  return (
    <div className={styles.container}>
      {playlists.items.length === 0 && (
        <p>you don't have any playlists :( go make one and come back!</p>
      )}
      <div>
        {playlists.items.length > 0 && playlists.items.map(
          (playlist) => <PlaylistItem playlist={playlist} key={playlist.id} />
        )}
      </div>
    </div>
  );
}
