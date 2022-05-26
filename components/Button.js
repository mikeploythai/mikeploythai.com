import styles from '../styles/Button.module.css'

export default function Button(props) {
  return (
    <a className={styles.button} href="#" target="_blank" rel="noopenner noreferrer">
      <p className={styles.content}>Check out my resume!</p>
    </a>
  )
}