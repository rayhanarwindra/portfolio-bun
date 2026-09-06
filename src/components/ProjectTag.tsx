import { ProjectTagMap } from './constants'
import styles from './styles/ProjectTag.module.scss'

type Props = {
  type: 'NEXT' | 'REACT' | 'VUE' | 'NEST' | 'GOLANG'
}

export default function ProjectTag(props: Props) {
  const { type } = props
  const { color, label } = ProjectTagMap[type]
  return (
    <div
      className={styles.projectTag}
      style={{
        color,
        borderColor: color,
      }}
    >
      <span>{label}</span>
    </div>
  )
}
