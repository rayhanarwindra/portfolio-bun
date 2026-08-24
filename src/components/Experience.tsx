import styles from './styles/Experience.module.scss'
import ExperienceList from '../data/experience.json'

export default function Experience() {
  return (
    <div className={styles.experience}>
      <span className={styles.experience__title}>Experience</span>
      <div className={styles.experience__list}>
        {ExperienceList.map((experience) => (
          <ExperienceItem {...experience} />
        ))}
      </div>
    </div>
  )
}

type Props = {
  company: string
  description: string
  duration: string
  title: string
}

function ExperienceItem(props: Props) {
  const { company, description, duration, title } = props
  return (
    <div className={styles.experience__item}>
      <div className={styles.experience__item__header}>
        <div className={styles.experience__item__details}>
          <span className={styles.experience__item__company}>{company}</span>
          <span className={styles.experience__item__separator}>|</span>
          <span className={styles.experience__item__title}>{title}</span>
        </div>
        <span className={styles.experience__item__duration}>{duration}</span>
      </div>
      <div className={styles.experience__item__description}>{description}</div>
    </div>
  )
}
