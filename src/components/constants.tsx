import { Mail } from 'lucide-react'

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

export const ICON_MAP = {
  Linkedin: (
    <svg
      xmlns="http://w3.org"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Github: (
    <svg
      viewBox="0 0 96 96"
      width="24"
      height="24"
      fill="currentColor"
      xmlns="http://w3.org"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48 0C21.49 0 0 21.49 0 48c0 21.21 13.75 39.2 32.83 45.55 2.4.44 3.28-1.04 3.28-2.31 0-1.14-.04-4.16-.07-8.17-13.35 2.9-16.17-6.44-16.17-6.44-2.18-5.54-5.33-7.01-5.33-7.01-4.36-2.98.33-2.92.33-2.92 4.82.34 7.36 4.95 7.36 4.95 4.28 7.34 11.24 5.22 13.98 3.99.44-3.1 1.68-5.22 3.05-6.42-10.66-1.21-21.87-5.33-21.87-23.73 0-5.24 1.87-9.53 4.94-12.89-.5-1.21-2.14-6.1.47-12.72 0 0 4.03-1.29 13.2 4.92a45.9 45.9 0 0124 0c9.17-6.21 13.19-4.92 13.19-4.92 2.62 6.62.98 11.51.48 12.72 3.08 3.36 4.93 7.65 4.93 12.89 0 18.45-11.23 22.51-21.92 23.69 1.72 1.48 3.26 4.41 3.26 8.89 0 6.42-.06 11.6-.06 13.18 0 1.28.87 2.77 3.3 2.3A48.01 48.01 0 0096 48c0-26.51-21.49-48-48-48z"
      />
    </svg>
  ),
  Email: <Mail />,
}
