import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { navData } from './headerData'

function MenuBar({status, isActive}) {
  return (
    <ul className={status === 'shown' ? 
    styles.shownUl :
    isActive ? styles.activeHiddenUl : styles.hiddenUl}>
      {navData.map(obj => {
          return (
              <li key={obj.id} className={status === 'shown' ? styles.shownLi : styles.hiddenLi}><Link className={styles.link} to={obj.name.toLowerCase()}>{obj.name}</Link></li>
          )
      })}
     </ul>
  )
}

export default MenuBar