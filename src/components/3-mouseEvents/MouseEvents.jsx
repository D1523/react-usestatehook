import React from 'react'
import { useState } from 'react'

const MouseEvents = () => {
    const [visible, setVisible]=useState(false)
    const[coordX, setCoordX]=useState()
    const[coordY, setCoordY]=useState()
const handleMove=(e)=>{
    setCoordX(e.pageX)
    setCoordY(e.pageY)

}
  return (
    <div className="container text-center d-flex
     flex-column align-items-center mt-4">
    <h2 className="text-danger">MouseEvents</h2>
    <div id="todo-1" className="bg-success text-light w-50 p-4" 
    onMouseEnter={()=>setVisible(true)}
    onMouseLeave={()=>setVisible(false)}
    >todo item 1
    {visible&&<div>HINT=mouseEnter and mouseLeave</div>}
    </div>
     <div id="todo-2" className="bg-success text-light w-50 p-4">todo item 2
     </div>
      <div id="todo-3" className="bg-success text-light w-50 p-4"
      onMouseMove={handleMove}>todo item 3
      </div>
      <p>x:{coordX} and y:{coordY}</p>
      </div>

  )
}
 
export default MouseEvents