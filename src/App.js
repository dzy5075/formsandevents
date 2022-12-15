import Form from "./Form"
import {useState} from "react"
function App() {

  const [inputOne, setInputOne] = useState("")
  const [inputTwo, setInputTwo] = useState("")
  const [display, setDisplay] = useState([])

  function handleInputOne(e){
  setInputOne(e.target.value)
  }
  function handleInputTwo(e){
  setInputTwo(e.target.value)
  }
  const fullInput = inputOne + " " + inputTwo
  function handleDisplay(e){
  e.preventDefault()
  setDisplay([...display, fullInput])
  }
  console.log(display)
  return (
    <div>
    <h1>My Form</h1>
    < Form firstInput = {inputOne}
           secondInput = {inputTwo}
           display = {display}
           handleFirstInput = {handleInputOne}
           handleSecondInput = {handleInputTwo}
           handleDisplay = {handleDisplay}
    />
    </div>
  );
}

export default App;
