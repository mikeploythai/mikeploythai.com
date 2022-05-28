import {projects} from './lib/projects'
import styles from '../styles/ProjectGrid.module.css'

export default function ProjectGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <h2>Featured Projects</h2>

        <section className={styles.content}>
          <span className={styles.gridItems}>
            {projects.map(({name, link}) =>(
              <a
                key={link}
                className={styles.item}
                href={link}
                target="_blank"
                rel="noopenner noreferrer"
              >
                {name}
              </a>
            ))}
          </span>

          <a className={styles.link} href="https://github.com/mikeploythai" target="_blank" rel="noopenner noreferrer">
            <p>View More</p>
            <ion-icon name="arrow-forward-outline" size="small"></ion-icon>
          </a>
        </section>
      </div>
    </div>
  )
}