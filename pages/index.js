import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vibe Viewer</title>
        <meta name="description" content="visual of playlist flow using Spotify's track analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Vibe Viewer!
        </h1>

        <p className={styles.description}>
          Visualizing a playlist flow using Spotify's track analysis
        </p>

        <div className={styles.grid}>
          <Link href="/vibe-viewer/playlist-selection">
            <a className={styles.card}>
              <h2>Get Started &rarr;</h2>
              <p>Let's take a look at your playlists!</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
