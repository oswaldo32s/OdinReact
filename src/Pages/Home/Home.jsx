import WelcomeCard from "./WelcomeCard/WelcomeCard"
import styles from './Home.module.css'
import ProjectsCard from "./ProjectsCard/ProjectsCard"

function Home() {
  return(
    <main className={styles.wrapContainer}>
      <WelcomeCard />
      <ProjectsCard/>
    </main>
  )
}

export default Home