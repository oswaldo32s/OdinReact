import OverviewCard from './OverviewCard'
import styles from './ProjectsCard.module.css'
import { projectOverview } from './projectsData'

function ProjectsCard() {
  return(
    <div className={styles.wrapContainer}>
      <section className={styles.container}>
        <h2>The Odin&apos;s Projects.</h2>
        <div className={styles.boxContainer}>
          {projectOverview.map(object => {
            return <OverviewCard object={object} key={object.projectId}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default ProjectsCard