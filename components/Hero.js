import LinkGrid from './LinkGrid'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.content}>
          <h1>Hi, I&apos;m Mike ✌🏼</h1>
          <p>I&apos;m a frontend developer and UI/UX designer based in Los Angeles.</p>
        </section>

        <LinkGrid />
      </div>
    </div>
  )
}