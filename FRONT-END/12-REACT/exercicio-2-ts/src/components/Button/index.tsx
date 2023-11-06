import styles from './styles.module.css'

interface Props {
  text: string
}

export default (props: Props) => {
  return(
    <button className={styles.wrapper}>{props.text}</button>
  )
}