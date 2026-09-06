import type { Tag } from './constants'
import ProjectTag from './ProjectTag'
import ProjectTools from './ProjectTools'
import styles from './styles/ProjectItem.module.scss'
import { Lock } from 'lucide-react'

export type Props = {
  title: string
  description: string
  tags: Tag[]
  tools: string[]
  url?: string
}

export default function ProjectItem(props: Props) {
  const { title, description, tags, tools, url } = props
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItem__header}>
        <span className={styles.projectItem__title}>{title}</span>
        <div className={styles.projectItem__tags}>
          {tags.map((tag, index) => (
            <ProjectTag type={tag} key={`${tag}-${index}`} />
          ))}
        </div>
      </div>
      <span className={styles.projectItem__description}>{description}</span>
      <div className={styles.projectItem__tags}>
        {tools.map((tool, index) => (
          <ProjectTools label={tool} key={`${tool}-${index}`} />
        ))}
      </div>
      <div className={styles.projectItem__footer}>
        <hr className={styles.projectItem__divider} />
        <div className={styles.projectItem__confidential}>
          <Lock />
          <span>Source code is confidential</span>
        </div>
      </div>
    </div>
  )
}
