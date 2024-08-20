import Header from "../components/Headers"
import styles from '../styles/App.module.css'

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

import img1 from '../assets/parallax backgound pack/1.png'
import img2 from '../assets/parallax backgound pack/2.png'
import img3 from '../assets/parallax backgound pack/3.png'
import img4 from '../assets/parallax backgound pack/4.png'
import img5 from '../assets/parallax backgound pack/5.png'
import img6 from '../assets/parallax backgound pack/6.png'
import img7 from '../assets/parallax backgound pack/7.png'
import img8 from '../assets/parallax backgound pack/8.png'
import img9 from '../assets/parallax backgound pack/9.png'
import img10 from '../assets/parallax backgound pack/10.png'
import img11 from '../assets/parallax backgound pack/11.png'

const App = () => {
  return (
    <>
      <Header/>
      <div className={styles.main}>
        {/* <ParallaxProvider>
          <Parallax speed={-20}>
            <div style={{backgroundImage: `url(${img1})`, height: '100vh', position:'absolute', top: '0', bottom: '0'}}></div>
          </Parallax>

          <Parallax speed={-17}>
            <div style={{backgroundImage: `url(${img2})`, height: '100vh', position:'absolute', top: '0', bottom: '0'}}></div>
          </Parallax>

          <Parallax speed={-13}>
            <div style={{backgroundImage: `url(${img3})`, height: '100vh', position:'absolute', top: '0', bottom: '0'}}></div>
          </Parallax>

          <Parallax speed={-12}>
            <div style={{backgroundImage: `url(${img4})`, height: '100vh', position:'absolute', top: '0', bottom: '0'}}></div>
          </Parallax>

          <Parallax speed={-20}>
            <div style={{backgroundImage: `url(${img5})`, height: '100vh', position:'absolute', top: '0', bottom: '0'}}></div>
          </Parallax>
        </ParallaxProvider> */}
        <ParallaxProvider styles={{innherHeight : '200vh'}}>
            <ParallaxBanner
              layers={[
                {image: img11, speed: -20, scaleY: 5},
                {image: img10, speed: -20, scaleY: 10},
                {image: img9, speed: -20, scaleY: 15},
                {image: img8, speed: -20, scaleY: 20},
                {image: img7, speed: -20, scaleY: 25},
                {image: img6, speed: -20, scaleY: 25},
                {image: img5, speed: -20, scaleY: 27},
                {image: img4, speed: -20, scaleY: 30},
                {image: img3, speed: -20, scaleY: 31},
                {image: img2, speed: -20, scaleY: 33},
                {image: img1, speed: -20, scaleY: 36},
              ]}
              style={{height: '100vh' }}
            />
        </ParallaxProvider>

        <div style={{backgroundColor: '#00ff70', height: '200vh'}}></div>
      </div>
    </>
  )
}

export default App