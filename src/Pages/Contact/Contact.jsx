import Form from "../../components/Form/Form"
import styles from './Contact.module.css'

function Contact() {
  const contactFormData = [
    {
      id: 1,
      name: 'name',
      label: 'Name',
      type: 'text',
      isRequired: true,
    },
    {
      id: 2,
      name: 'email',
      label: 'Email',
      type: 'email',
      isRequired: true
    },
    {
      id: 3,
      name: 'message',
      label: 'Message',
      type: 'textarea',
      isRequired: true
    },
  ]
  return (
    <div className={styles.wrapContainer}>
      <section className={styles.container}>
        <div className={styles.formSection}>
          <h2 className={styles.title}>Contact Us!</h2>
          <Form dataArray={contactFormData}/>
        </div>
        <img src="/images/contact-us.jpg" alt="contact us image" className={styles.img}/>
      </section>
    </div>
  )
}

export default Contact