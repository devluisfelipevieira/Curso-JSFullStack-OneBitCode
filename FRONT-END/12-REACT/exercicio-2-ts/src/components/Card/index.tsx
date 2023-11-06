import Button from "../Button"
import styles from "./styles.module.css"

interface CardParams {
  title: string
  posterImg: string
  text: string
}

export default ({title, posterImg, text}: CardParams) => {
  return(
      <div className={styles.container}>
        <img className={styles.poster} src={posterImg} alt="posterImg" />
        <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button text="Comprar agora"></Button>
      </div>
      </div>
  )
}