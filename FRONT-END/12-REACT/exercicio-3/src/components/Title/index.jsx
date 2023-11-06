import styles from "./styles.module.css"

export default (props) => {
  return(
    <h1 className={styles.wrapper}>{props.children}</h1>
  )
}