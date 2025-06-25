import AddUser from "./Components/addUser"
import ShowUser from "./Components/ShowUser"
import { useState } from "react"
function App() {

  const [user, setUser] = useState("")


  return (
    <>
      <div>hello world </div>
      <AddUser setUser={setUser} />
      <ShowUser user={user} />
    </>
  )
}

export default App
