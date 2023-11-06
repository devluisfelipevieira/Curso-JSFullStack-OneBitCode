import styles from "./styles.module.css"

export default (props) => {
  return (
    <a
      className={styles.wrapper} target="_blank"
      href={props.href}
    >
      {props.children}
    </a>
  )
}