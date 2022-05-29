import {links} from './lib/links'
import styles from '../styles/LinkGrid.module.css'

export default function LinkGrid() {
  return (
    <div className={styles.list}>
      {links.map(({icon, link, key}) =>(
        <a
          key={key}
          className={styles.icons}
          href={link}
          target="_blank"
          rel="noopenner noreferrer"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}