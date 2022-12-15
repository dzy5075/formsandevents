import Form from "./Form"
import {useState} from "react"
function App() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [display, setDisplay] = useState("")
  console.log(display)
  function handleFirst(e){
    setFirstInput(e.target.value)
  }
  function handleSecond(e){
    setSecondInput(e.target.value)

  }

  const fullName = `${firstInput} ${secondInput}`
  function handleSubmit(e){
  e.preventDefault()
  setDisplay(fullName)
  }

  return (
    <div className="App">
    <h1>Forms</h1>
    < Form handleFirst = {handleFirst}
           handleSecond = {handleSecond}
           handleSubmit = {handleSubmit}
           display = {display}
    />
    </div>
  );
}

export default App;
