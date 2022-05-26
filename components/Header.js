import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a className={styles.init} href="#">
          <b>MP</b>
        </a>

        <a
          className={styles.btn}
          href="resume.pdf"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Check out my resume!
        </a>
      </div>
    </div>
  )
}