import styles from '../styles/Contact.module.css'
import Links from './Links';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.content}>
          <h2>Get in Touch</h2>

          <section className={styles.txt}>
            <i>
              *Currently pursing internship roles in software engineering and/or
              frontend engineering!
            </i>

            <p>
              Feel free to say hi! The best methods to get in touch are via
              Instagram DMs and email. If you want to work with me, I’m
              available as a freelance UI designer and web developer :)
            </p>
          </section>
        </span>

        <Links />
      </div>
    </div>
  );
}
