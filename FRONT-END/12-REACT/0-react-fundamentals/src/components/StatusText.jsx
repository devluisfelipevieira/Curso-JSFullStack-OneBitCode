export default () => {
  const status = true
  return (
    <div>
      <h2
        style={{
          color: status ? "#00ff9f" : "#f64348"
        }}
      >Current status: {status ? "ON" : "OFF"}</h2>
      <p>{true  && "Text"}</p>{/* se for "true" realiza o resto do código */}
    </div>
  )
}