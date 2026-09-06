export type Tag = 'NEXT' | 'REACT' | 'VUE' | 'NEST' | 'GOLANG'

type TagObject = {
  label: string
  color: string
}

export const ProjectTagMap: Record<Tag, TagObject> = {
  VUE: {
    color: '#41B883',
    label: 'Vue.js',
  },
  GOLANG: {
    color: '#00ADD8',
    label: 'Golang',
  },
  NEST: {
    color: '#E0234E',
    label: 'Nest.js',
  },
  NEXT: {
    color: '#FFFFFF',
    label: 'Next.js',
  },
  REACT: {
    color: '#61DBFB',
    label: 'React.js',
  },
}
