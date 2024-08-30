import clsx from "clsx"
import Header from "../components/Headers"
import ParallaxTitle from "../components/ParallaxTitle"
import styles from '../styles/App.module.css'
import LinedTitle from "../components/LinedTitle"

import pfp from '../assets/compressed.png'

const App = () => {
  return (
    <>
      <Header/>
      <div className={styles.main}>
        <ParallaxTitle/>

        <div className={clsx(styles.panels)}>
          <div className={styles.greetings}>
            <div className={clsx(styles.pfp)}>
              <div className={styles.image}>
                <img src={pfp} alt="pfp" />
                <h7>👋</h7>
              </div>
            </div>
            <div className={clsx(styles.msg)}>
              <div className={styles.top}>
                <LinedTitle title={'Greetings!'} width={'550px'} titleSize={'3.3rem'}/>
              </div>
              <div className={styles.mid}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil iste corporis tenetur. Esse, veritatis culpa, vero repellendus quibusdam fugiat natus nihil dignissimos quisquam suscipit deserunt! Itaque quam temporibus totam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil iste corporis tenetur. Esse, veritatis culpa, vero repellendus quibusdam fugiat natus nihil dignissimos quisquam suscipit deserunt! Itaque quam temporibus totam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil iste corporis tenetur. Esse, veritatis culpa, vero repellendus quibusdam fugiat natus nihil dignissimos quisquam suscipit deserunt! Itaque quam temporibus totam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil iste corporis tenetur. Esse, veritatis culpa, vero repellendus quibusdam fugiat natus nihil dignissimos quisquam suscipit deserunt! Itaque quam temporibus totam?
              </div>
              <div className={styles.bot}>
                <hr style={{height: 3, border: 'none', backgroundColor: '#D96080', borderRadius: 12, width: '100%'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.panels}></div>
        <div className={styles.panels}></div>
      </div>  
    </>
  )
}

export default App