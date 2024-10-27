import styles from './About.module.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className={styles.wrapContainer}>
      <section className={styles.container}>
        <img src="/images/avatar.webp" alt="Oswaldo Avatar from Duolingo" className={styles.avatar}/>
        <article>
          <h3 className={styles.title}>I&apos;m Oswaldo, an Analytics Engineer for RXO in Jalisco, México.</h3>
          <p className={styles.p}>
            Hello! I&apos;m a 24-year-old guy with a strong passion for exploring new knowledge and expanding my skill set. 
            My journey in data and analytics has equipped me with a solid foundation in data engineering, enabling me to transform raw data into actionable insights.
          </p>
          <p className={styles.p}>
            Beyond my core expertise, I&apos;m deeply interested in web applications and full-stack development. 
            The world of web technologies fascinates me, and I&apos;m constantly learning about the tools and techniques that bring dynamic, interactive applications to life. 
            Whether it&apos;s diving into backend logic, front-end design, or data-driven functionalities, I&apos;m excited to build and contribute to meaningful digital experiences.
          </p>
          <p className={styles.p}>
            In every project, I bring curiosity, adaptability, and a commitment to continuous growth. 
            Thanks for stopping by, and I look forward to connecting!
          </p>
          <Link to='/contact' ><span className={styles.link}>Contact me!</span></Link>
        </article>
      </section>
    </div>
  )
}

export default About