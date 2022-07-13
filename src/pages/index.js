import Head from 'next/head'
import LandingContainer from '../components/container/LandingContainer'

export default function Home() {
  return (
    <div className="container debug-screens">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Personal website of Alisha Yumna Bakri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <LandingContainer />
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
