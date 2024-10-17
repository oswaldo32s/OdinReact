import { useState } from 'react'
import styles from './Header.module.css'
import MenuBar from './MenuBar'

function Header() {
  const [isActive, setIsActive] = useState(false)

  function handleThemeClick() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      prefersDark.matches ? document.body.classList.toggle('light') : document.body.classList.toggle('dark')
  }
  
  function toggleMenu() {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  
  return (
      <header className={styles.mainHeader}>
          <section>
              <span className={styles.logoText}>OG Dev</span>
          </section>
          <nav className={styles.headerNav}>
              <button className={styles.themeBtn} onClick={handleThemeClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.themeSVG}><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>
              </button>
                <MenuBar status={'shown'}/>
              <button className={styles.menuBtn} onClick={toggleMenu}>
                <svg className={isActive ? styles.hiddenSVG : styles.themeSVG} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                <svg className={isActive ? styles.themeSVG : styles.hiddenSVG} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            <MenuBar status={'hidden'} isActive={isActive}/>
          </nav>
      </header>
  )
}   

export default Header