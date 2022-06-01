import { experience } from "./lib/experience-data";
import styles from "../styles/Experience.module.css";
import Collapsible from "react-collapsible";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.container}>
        <h2>My Experience</h2>

        <section className={styles.content}>
          {experience.map(({ company, role, tenure, b1, b2, b3, key }) => (
            <Collapsible
              key={key}
              trigger={
                <div className={styles.header}>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <p>{company}</p>
                    <i>
                      {role}, {tenure}
                    </i>
                  </span>

                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
              }
              classParentString={styles.card}
              transitionTime={250}
              easing="ease-in-out"
            >
              <ul className={styles.list}>
                <li>{b1}</li>
                <li>{b2}</li>
                <li>{b3}</li>
              </ul>
            </Collapsible>
          ))}
        </section>
      </div>
    </div>
  );
}
