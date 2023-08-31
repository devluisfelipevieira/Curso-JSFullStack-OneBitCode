import swPosterImg from "./assets/poster.jpg"
import esbPosterImg from "./assets/poster-2.jpg"
import rotjPosterImg from "./assets/poster-3.jpg"
import Card from "./components/Card";
import Button from "./components/Button";

export default function App() {
  return(
      <>
        <h1>Exercício 1</h1>
        <Button text="Ir ao Blog"/>
        <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
        <Card title="Pôster: Empire Stikes Back (1980)" posterImg={esbPosterImg}/>
        <Card title="Pôster: Return of the Jedi (1977)" posterImg={rotjPosterImg}/>
      </>
  )
}