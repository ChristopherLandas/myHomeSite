import Header from "../components/Headers"
import ParallaxTitle from "../components/ParallaxTitle"
import styles from '../styles/App.module.css'

const App = () => {
  return (
    <>
      <div className={styles.main}>
        <Header/>

        <ParallaxTitle/>
      </div>
    </>
  )
}

export default App