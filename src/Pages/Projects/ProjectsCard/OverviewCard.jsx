import styles from './OverviewCard.module.css'
import { Link } from 'react-router-dom'

function OverviewCard({object}) {
  const {projectName, projectSrc, projectDescription, projectId} = object

  return(
    <Link className={styles.boxContainer} to={`/projects/${projectId}`}>
      <img src={projectSrc} alt={projectName} className={styles.img}/>
      <article className={styles.article}>
        <h4 className={styles.cardTitle}>{projectName}</h4>
        <p className={styles.cardParagraph}>{projectDescription}</p>
      </article>
    </Link>
  )
}

export default OverviewCard