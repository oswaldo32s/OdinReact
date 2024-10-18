import WelcomeCard from "./WelcomeCard/WelcomeCard"
import styles from './Home.module.css'
import ProjectsCard from "./ProjectsCard/ProjectsCard"
import QuoteCard from "./QuoteCard/QuoteCard"

function Home() {
  return(
    <main className={styles.wrapContainer}>
      <WelcomeCard />
      <ProjectsCard/>
      <QuoteCard quote={"\"Every line of code is an opportunity to create something amazing. Don't get discouraged by mistakes; they are part of the process of innovation.\""}/>
    </main>
  )
}

export default Home