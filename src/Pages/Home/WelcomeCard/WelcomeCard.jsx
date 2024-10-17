import styles from './WelcomeCard.module.css'

function WelcomeCard() {
  return(
      <section className={styles.container}>
          <article>
            <h2>Welcome to the cool website!</h2>
            <p>Welcome to The Odin Project: React made by Oswaldo Gonzalez. This website is created to practices all odin&apos;s projects in react</p>
            <button>More About Me</button>
          </article>
          <img className={styles.img} alt='Image of Oswaldo Gonzalez'></img>
      </section>
  )
}

export default WelcomeCard