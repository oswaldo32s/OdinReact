import styles from './CallToAction.module.css'

function CallToAction({title, paragraph, buttonTxt}){
  return (  
    <div className={styles.wrapContainer}>
      <section className={styles.container}>
        <article>
          <h3 className={styles.text}>{title}</h3>
          <p className={styles.text}>{paragraph}</p>
        </article>
        <button className={styles.button}>{buttonTxt}</button>
      </section>
    </div>)
  }

export default CallToAction