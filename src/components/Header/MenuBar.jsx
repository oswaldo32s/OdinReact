import styles from './Header.module.css'
import { navData } from './headerData'

function MenuBar({status, isActive}) {
  return (
    <ul className={status === 'shown' ? 
    styles.shownUl :
    isActive ? styles.hiddenUl : styles.activeHiddenUl}>
      {navData.map(obj => {
          return (
              <li key={obj.id} className={status === 'shown' ? styles.shownLi : styles.hiddenLi}>{obj.name}</li>
          )
      })}
     </ul>
  )
}

export default MenuBar