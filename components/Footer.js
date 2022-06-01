import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <i className={styles.italics}>Designed + Developed By</i>
        <p>
          <b>Mike Ploythai</b>
        </p>
      </div>
    </div>
  );
}
