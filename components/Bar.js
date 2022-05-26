import Button from './Button.js'
import styles from '../styles/Bar.module.css'

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <b className={styles.bold}>MP</b>
        <Button />
      </div>
    </div>
  )
}