import Header from "../components/Headers"
import styles from '../styles/App.module.css'

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

import l1 from '../assets/Island/L1.png'
import l2 from '../assets/Island/L2.png'
import l3 from '../assets/Island/L3.png'
import l4 from '../assets/Island/L4.png'
import l5 from '../assets/Island/L5.png'

const App = () => {
  return (
    <>
      <Header/>
      <div className={styles.main}>
        <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {image: l1, speed: -10, scaleY: 5},
                {image: l2, speed: -10, scaleY: 30},
                {image: l3, speed: -10, scaleY: 20},
                {image: l4, speed: -10, scaleY: 20, style: {zIndex: 2}},
                {image: l5, speed: -10, scaleY: 0, style:{zIndex: 3}},
              ]}
              style={{height: '100vh'}}
            >
              <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: "center", justifyContent: "center", zIndex: 0}}>
                <h1 style={{transform: 'translate(0, -100px)', fontSize: '4rem'}}>Kurisu</h1>
              </div>
            </ParallaxBanner>
        </ParallaxProvider>
        <div style={{backgroundColor: '#020d13', height: '100vh'}}></div>
      </div>
    </>
  )
}

export default App