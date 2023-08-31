import styles from "./styles.module.css"

export default (props) => {
  return (
    <button className={styles.wrapper}>{props.text}</button>
  )
}