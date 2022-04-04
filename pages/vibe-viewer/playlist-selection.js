import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import { PlaylistListView } from "../../components/PlaylistListView";
import { getMyPlaylists } from "../../lib/apis/Spotify";
import { useEffect, useState } from "react";
import Loading from "../../components/atoms/Loading";
import Error from "../../components/atoms/Error";

export default function PlaylistSelection() {
  const { status, playlists, error } = usePlaylists();

  function usePlaylists() {
    const [state, setState] = useState({
      status: 'loading',
      playlists: null,
      error: null,
    });

    useEffect(() => {
      getMyPlaylists().then((res) => {
        if (res.ok) {
          setOk(res);
        } else {
          setError(res);
        }
      });
    }, []);

    return state;

    function setOk(apiResponse) {
      setState({
        ...state,
        playlists: apiResponse.data,
        status: 'ok',
      });
    }

    function setError(apiResponse) {
      setState({
        ...state,
        error: apiResponse.code,
        status: 'error'
      });
    }
  }

  if (status === 'loading') return <Loading />;

  if (status === 'error') return <Error error={error} />

  // user has no playlists?
  // paginate & search
  // dynamic path to detail page
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Select a Playlist</h1>
        {playlists.items.length === 0  && (
          <p>you don't have any playlists :( go make one and come back!</p>
        )}
        {playlists.items.length > 0  && playlists.items.map(
          (playlist) => <PlaylistListView playlist={playlist} key={playlist.id} />
        )}
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
