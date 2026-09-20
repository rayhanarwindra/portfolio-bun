import styles from './styles/Contact.module.scss'
import contactList from '../data/contacts.json'
import { ICON_MAP } from './constants'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <span className={styles.contact__title}>Contact</span>
      <div className={styles.contact__list}>
        {contactList.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            className={styles.contact__item}
          >
            <span className={styles.contact__icon}>
              {ICON_MAP[contact.name as keyof typeof ICON_MAP]}
            </span>
            <span>{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
