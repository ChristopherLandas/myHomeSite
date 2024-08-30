import { useEffect } from 'react'
import styles from '../styles/header.module.css'
import clsx from 'clsx'
import scrollEventTrigger from '../hooks/scrollEventTrigger'
import { AiFillGithub } from "react-icons/ai";


const Header = () => {
  useEffect(()=>{
    scrollEventTrigger(styles.header, styles.sticky, 500)
  },[])

  return (
    <nav className={styles.header}>
      <div className={styles.background}></div>
      
      <div className={clsx(styles.navigations, styles.home)}>
        KurisuDevu
      </div>

      <div className={clsx(styles.navigations, styles.selections)}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contacts</a>
        <a href="#">Email</a>  
      </div>

      <div className={clsx(styles.navigations, styles.menu)}>
        <a href="#">
          <AiFillGithub size={45}/>
        </a>
      </div>  
    </nav>
  )
}

export default Header