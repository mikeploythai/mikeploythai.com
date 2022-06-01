import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <section className={styles.content}>
          <h2>About Me</h2>

          <p>
            I’m currently a 4th year computer science major at CSUF. My passion
            is to create beautiful products and experiences using web
            technologies.
            <br></br>
            <br></br>
            I’m primarily a creative, and I first used code to help elevate the
            way I express myself. Now, I use code to develop things on the web
            that help bring people closer together.
            <br></br>
            <br></br>
            As I start to enter a full-time career in tech, I plan to shift my
            focus onto building apps and services that help people improve their
            relationships with tech.
            <br></br>
            <br></br>
            When I’m not doing anything related to coding or designing, I’m
            spending time with friends and family, trying to survive college
            (lmao), playing my guitar, or making{" "}
            <a
              className={styles.link}
              href="/youtube"
              target="_blank"
              rel="noopenner noreferrer"
            >
              YouTube videos
            </a>
            .
          </p>
        </section>

        <section className={styles.img}></section>
      </div>
    </div>
  );
}
