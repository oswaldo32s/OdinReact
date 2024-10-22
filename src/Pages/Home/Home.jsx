import WelcomeCard from "./WelcomeCard/WelcomeCard"
import styles from './Home.module.css'
import ProjectsCard from "../Projects/ProjectsCard/ProjectsCard"
import QuoteCard from "./QuoteCard/QuoteCard"
import CallToAction from "./CallToAction/CallToAction"

function Home() {
  return(
    <main className={styles.wrapContainer}>
      <WelcomeCard />
      <ProjectsCard/>
      <QuoteCard 
        quote={"\"Every line of code is an opportunity to create something amazing. Don't get discouraged by mistakes; they are part of the process of innovation.\""}
      />
      <CallToAction
        title="call to action! it's time!"
        paragraph="Sign un for our product by clicking that button right over there!"
        buttonTxt="Sign Up"
      />
    </main>
  )
}

export default Home