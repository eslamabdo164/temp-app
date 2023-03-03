import { useState } from 'react'
import './App.css'
import operators from '../Components/Operators'
function App() {
  //initialize the Temp state To Zero !
  const [tempCount , setTemp] = useState(0)

 // our Running Function ------> 
  function handleIncre() {
    setTemp(prevCount => prevCount+1)
  }

  function handleDecre() {
    setTemp(prevCount => prevCount -1)

  }

//-------- Working with Background! ----- 

const [bgColor , setColor] = useState("cold")

  // The Idea is to dynamic apply of `hot` class and use seprate satet for bg color!
  return (
    <div className={tempCount>10 ?"App hot" : "App" } > 
      <div className="temp">
         <h3>{tempCount} C </h3>
      </div>
      <div className="operators">
          <div className="incre" 
          onClick={handleIncre}
          > + </div>
          <div 
          onClick={handleDecre}
          className="decre"> - </div>
      </div>
    </div>
  )
}

export default App
