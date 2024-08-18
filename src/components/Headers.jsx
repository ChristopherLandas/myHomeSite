import { useEffect } from 'react'
import styles from '../styles/header.module.css'
import HeaderObserver from '../hooks/HeaderObserver'
import clsx from 'clsx'

const Header = () => {
  useEffect(()=>{
    HeaderObserver(styles.header, styles.sticky)
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