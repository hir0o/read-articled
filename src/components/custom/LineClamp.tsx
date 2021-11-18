import { FC } from 'react'
import styles from './LineClam.module.scss'

const LineClam: FC = ({ children }) => {
  return <div className={styles.lineClam}>{children}</div>
}

export default LineClam
