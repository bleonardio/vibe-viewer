import Link from 'next/link'

export function PlaylistListView({ playlist }) {
  return (
    <div>
      <Link href="/vibe-viewer/playlist-detail">
        <a>
          <p><b>{playlist.name}</b></p>
          <p>{playlist.description}</p>
        </a>
      </Link>
    </div>
  );
}
