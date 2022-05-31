import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Head from 'next/head'

export default function Main() {
  return (
    <div>
      <Head>
        <title>Mike Ploythai</title>
      </Head>

      <Header />
      <Hero />
      <Projects />
      <Experience />
    </div>
  )
}