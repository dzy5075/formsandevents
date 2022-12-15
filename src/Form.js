import { useState } from "react"
function Form({firstInput, secondInput, handleFirstInput, handleSecondInput, handleDisplay, display}){
const myArray = display.map((inputs, index) => {
return <li key = {index}> {inputs}</li>
})
return(
<div>
    <form onSubmit={handleDisplay}>
        <input type = "text" onChange={handleFirstInput} ></input>
        <input type = "text" onChange={handleSecondInput}></input>
        <button>Submit</button>
    </form>
    <ul>
    {myArray}
   </ul>

</div>
)
}
export default Form