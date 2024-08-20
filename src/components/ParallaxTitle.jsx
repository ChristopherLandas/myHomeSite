import styles from '../styles/ParallaxTitle.module.css'
import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxTitle = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '../assets/2.png', speed: -20 },
        { image: '../assets/3.png', speed: -10 },
      ]}
      style={{height: '100vh'}}
    >
    </ParallaxBanner>
  );
}

export default ParallaxTitle