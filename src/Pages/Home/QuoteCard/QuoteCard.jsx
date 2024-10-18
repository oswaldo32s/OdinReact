import styles from './QuoteCard.module.css'

function QuoteCard({quote}) {
  return(
    <div className={styles.wrapContainer}>
      <section className={styles.container}>
        <p className={styles.quote}><i>{quote}</i></p>
      </section>
    </div>
  )
}

export default QuoteCard