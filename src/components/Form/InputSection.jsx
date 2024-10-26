import styles from './InputSection.module.css'
/* eslint-disable react/prop-types */
function InputSection({id, label, type, isRequired}) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <span className={styles.requiredField}>
          {isRequired ? 'required' : ''}
        </span>
      </label> 
      {type === 'textarea'? <textarea id={id} className={styles.input} required={isRequired}></textarea> : <input required={isRequired} id={id} type={type} className={styles.input}/>}
    </div>
  )
}

export default InputSection