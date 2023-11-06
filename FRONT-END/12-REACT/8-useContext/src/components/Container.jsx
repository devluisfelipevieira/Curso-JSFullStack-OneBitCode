import UserInfo from "./UserInfo"

export default ({children}) => {
  return (
    <div>
      <p>Container do App</p>
      <UserInfo/>
      {children}
    </div>
  )
}