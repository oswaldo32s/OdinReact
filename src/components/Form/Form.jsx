/* eslint-disable react/prop-types */
import InputSection from "./InputSection"
import styles from './Form.module.css'

function Form({dataArray}) {
  return (
      <form className={styles.form} action="#" onSubmit={(e) => {
        const form = e.target.closest('form')
        e.preventDefault()
        alert('Message sent, thanks!')
        form.reset()
      }}>
        {dataArray.map(object => {
            return (
              <InputSection
              key={object.id}
              id = {object.name}
              label = {object.label}
              type = {object.type}
              isRequired = {true}
            />
            )
          })}
        <button>Submit</button>
      </form>
  )
}

export default Form