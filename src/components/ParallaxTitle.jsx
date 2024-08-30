import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

import l1 from '../assets/new bg/l1-extended.png'
import l2 from '../assets/new bg/l2.png'
import l3 from '../assets/new bg/l3.png'
import l4 from '../assets/new bg/l4.png'
import l5 from '../assets/new bg/l5.png'
import l6 from '../assets/new bg/l6.png'
import l7 from '../assets/new bg/l7.png'


const ParallaxTitle = () => {
  const device = /android|iPhone/i.test(navigator.userAgent)

  return (
    <div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {image: l1, scaleY: device? 0: -100 * 1.1, translateY: [0, -30, 'easeIn']},  
            {image: l2, scaleY: device? 0: -66.67 * 1.3},  
            {image: l3, scaleY: device? 0: -66.67},
            {image: l4, scaleY: device? 0: -50 * 1.3},
            {image: l5, scaleY: device? 0: -33.4 * 1.3},
            {image: l6, scaleY: device? 0: -16.67 * 1.3},
            {image: l7, scaleY: 0},
            {image: <h1>Kurisu</h1>}
          ]}
          style={{height: '100vh'}}
        >
          <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: "center", justifyContent: "center", zIndex: 0}}>
            <h1 style={{transform: 'translate(0, -100px)', fontSize: '4rem'}}>{device ? "hello": '123'}</h1>
          </div>
        </ParallaxBanner>
      </ParallaxProvider> 
    </div>
  )
}

export default ParallaxTitle