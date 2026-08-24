import { Hero, Navbar } from './components'
import Experience from './components/Experience'
import styles from './styles/App.module.scss'

export default function App() {
  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <Hero />
        <Experience />
      </div>
    </>
  )
}
