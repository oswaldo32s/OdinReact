import WelcomeCard from "./WelcomeCard/WelcomeCard"
import styles from './Home.module.css'

function Home() {
  return(
    <main className={styles.wrapContainer}>
      <WelcomeCard />
    </main>
  )
}

export default Home