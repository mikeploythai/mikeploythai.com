import Header from '../components/Header'
import Hero from '../components/Hero'
import Head from 'next/head'

export default function Main() {
  return (
    <div>
      <Head>
        <title>Mike Ploythai</title>
      </Head>

      <Header />
      <Hero />
    </div>
  )
}
