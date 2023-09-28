import { useState } from "react"
const KeyboardClipsBoard = () => {
const[content, setContent] = useState("")
const handleKeyDown=(e)=>{
    if (e.keyCode>=48&&e.keyCode<=57){
        alert("please dont enter a number")
        e.preventDefault()
    }
}
const handlePaste=(e)=>{
e.target.className="form-control border border-danger border-4"    
}
const handleCopy=(e)=>{
    alert("copying illegal")
    e.preventDefault()
}
const handleCut=(e)=>{
    alert("cutting illegal")
    e.preventDefault()
}
  return (
    <div className="container mt-4">
        <h2 className="text-center">KeyboardClipsBoard</h2>
        <input type="text" className="form-control"
         onChange={(e)=>{
            setContent(e.target.value.toLocaleUpperCase())
         }}
         onKeyDown={handleKeyDown} 
        value={content}
    />
        <div className="mt-4">
            <h3>Copied Content</h3>
            <p onCopy={handleCopy} onCut={handleCut}>{content.toLocaleUpperCase()}</p>

        </div>
        <textarea 
        className="form-control" id="" 
        cols="90" rows="20"
        onPaste={handlePaste}
        ></textarea>
        </div>
  )
}

export default KeyboardClipsBoard