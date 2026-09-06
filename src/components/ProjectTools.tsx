import styles from './styles/ProjectTools.module.scss'

type Props = {
  label: string
}

export default function ProjectTools(props: Props) {
  const { label } = props
  return (
    <div className={styles.projectTools}>
      <span>{label}</span>
    </div>
  )
}
