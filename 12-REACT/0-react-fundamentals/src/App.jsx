import StatusText from "./components/StatusText"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"

function sum(a, b) {
  return a + b
}

export default function App() {
  return (
    <div className={styles.app}>
      <Title/>
      <Subtitle/>
      <StatusText/>
    </div>
  )
}