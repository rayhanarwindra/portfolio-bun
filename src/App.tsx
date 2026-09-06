import { Hero, Navbar, Experience, Projects } from './components'
import styles from './styles/App.module.scss'

export default function App() {
  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <Hero />
        <Experience />
        <Projects />
      </div>
    </>
  )
}
