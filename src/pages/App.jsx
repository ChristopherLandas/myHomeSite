import Header from "../components/Headers"
// import ParallaxTitle from "../components/ParallaxTitle"
import styles from '../styles/App.module.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import img1 from '../assets/2.png'
import img2 from '../assets/3.png'
import img3 from '../assets/4.png'
import img4 from '../assets/5.png'
import img5 from '../assets/6.png'
import img6 from '../assets/7.png'
import img7 from '../assets/8.png'

const App = () => {
  return (
    <>
      <Header/>
      
      <Parallax pages={2}>
        <ParallaxLayer
            speed={1}
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>
        
        <ParallaxLayer
            speed={1}
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={2}
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={3}
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={4}
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={5}
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={6}
            style={{
              backgroundImage: `url(${img7})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={6}
            offset={.999}
            style={{
              backgroundColor: '#27040f',
              height:'200vh'
            }}
          >
            hello
            <br />
            <br />
            <br />
            <br />
            <br />
            world
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App