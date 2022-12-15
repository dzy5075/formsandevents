import Form from "./Form"
import {useState} from "react"
function App() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [display, setDisplay] = useState(["bobby fisher"])
  console.log(display)
  function handleFirst(e){
    setFirstInput(e.target.value)
  }
  function handleSecond(e){
    setSecondInput(e.target.value)

  }

  const fullName = firstInput + " " + secondInput
  const newNameArray = display.map(names =>{
    return <li>{names}</li>
  })

  function handleSubmit(e){
  e.preventDefault()
  setDisplay([...display, fullName])
  }

  return (
    <div className="App">
    <h1>Forms</h1>
    < Form handleFirst = {handleFirst}
           handleSecond = {handleSecond}
           handleSubmit = {handleSubmit}
           display = {display}
           newNameArray = {newNameArray}
    />
    </div>
  );
}

export default App;