import ProjectItem from './ProjectItem'
import styles from './styles/Projects.module.scss'
import RawProjectList from '../data/projects.json'
import { type Props as ProjectProps } from './ProjectItem'

export default function Projects() {
  const ProjectList: ProjectProps[] = JSON.parse(JSON.stringify(RawProjectList))
  return (
    <div className={styles.projects}>
      <span className={styles.projects__title}>Projects</span>
      <div className={styles.projects__grid}>
        {ProjectList.map((project, index) => (
          <ProjectItem {...project} key={`${project.title}-${index}`} />
        ))}
      </div>
    </div>
  )
}
