import styles from './OverviewCard.module.css'

function OverviewCard({object}) {
  const {projectName, projectSrc, projectDescription} = object

  return(
    <div className={styles.boxContainer}>
      <img src={projectSrc} alt={projectName} className={styles.img}/>
      <article className={styles.article}>
        <h4 className={styles.cardTitle}>{projectName}</h4>
        <p className={styles.cardParagraph}>{projectDescription}</p>
      </article>
    </div>
  )
}

export default OverviewCard