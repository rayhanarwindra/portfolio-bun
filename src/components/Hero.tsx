import { ArrowDown } from 'lucide-react'
import styles from './styles/Hero.module.scss'
import Nest from '../assets/Nest.js.webp'
import React from '../assets/React.webp'
import Vue from '../assets/Vue.webp'

export default function Hero() {
  return (
    <main className={styles.Hero}>
      <div className={styles.Hero__text}>
        <span className={styles.Hero__title}>Hi! I'm Rayhan Arwindra 👋</span>
        <span className={styles.Hero__description}>
          Front-end focused, full stack software engineer
        </span>
        <span className={styles.Hero__cta}>
          Get to know me <ArrowDown />
        </span>
      </div>
      <div className={styles.Hero__images}>
        <img src={Nest} className={styles.Hero__image} />
        <div className={styles.Hero__images__row}>
          <img src={Vue} className={styles.Hero__image} />
          <img src={React} className={styles.Hero__image} />
        </div>
      </div>
    </main>
  )
}
