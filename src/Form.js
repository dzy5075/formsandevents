import { useState } from "react"
function Form({handleFirst, handleSecond, handleSubmit, display}){

  
  
return(
    <form onSubmit={handleSubmit}>
        <input type = "text"
        onChange={handleFirst}
        ></input>
        <input type = "text"
        onChange={handleSecond}
        ></input>
        <button type = "submit">Click</button>
        <h1> {display}</h1>
    </form>
)
}
export default Form