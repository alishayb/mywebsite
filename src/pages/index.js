import LandingContainer from '@components/container/LandingContainer'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center overscroll-auto pt-lg">
      <Head>
        <title>Alisha Yumna Bakri</title>
        <meta name="description" content="Personal website of Alisha Yumna Bakri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <LandingContainer />
        
      </main>

      <footer className="mt-auto">
        <img src="/asset/landing-page-wave.svg" />
      </footer>
    </div>
  )
}
