import styles from './WelcomeCard.module.css'
import { Link } from 'react-router-dom'

function WelcomeCard() {
  return(
      <div className={styles.wrapContainer}>
        <section className={styles.container}>
            <article>
              <h2>Welcome to the cool website!</h2>
              <p>Welcome to The Odin Project: React made by Oswaldo Gonzalez. This website is created to practices all odin&apos;s projects in react and in a near Future serve as a portfolio for my Data Engineering and my Full Stack skills.</p>
              <button><Link to={'/about'}>More About Me</Link></button>
            </article>
            <img className={styles.img} alt='Image of Oswaldo Gonzalez'></img>
        </section>
      </div>
  )
}

export default WelcomeCard