import { useEffect } from 'react'
import styles from '../styles/header.module.css'
// import HeaderObserver from '../hooks/HeaderObserver'
import clsx from 'clsx'
import scrollEventTrigger from '../hooks/scrollEventTrigger'
// import scrollEventTrigger from '../hooks/scrollEventTrigger'

const Header = () => {
  useEffect(()=>{
    scrollEventTrigger(styles.header, styles.sticky, 120)
  },[])

  return (
    <nav className={styles.header}>
      <div className={styles.background}></div>
      
      <div className={clsx(styles.navigations, styles.home)}>a</div>
      <div className={clsx(styles.navigations, styles.selections)}>b</div>
      <div className={clsx(styles.navigations, styles.menu)}>c</div>  
    </nav>
  )
}

export default Header