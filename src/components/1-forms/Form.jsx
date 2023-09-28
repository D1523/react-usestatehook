import { useState } from "react"
const Form = () => {
const[username, setUsername]=useState("")
const[email, setEmail]=useState("")
const[password, setPassword]=useState("")
const handleUsername=(e)=>{
setUsername(e.target.value)
    }
  return (
    <div className="container mt-4">
        <h2 className="text-center text-success"> FORMS IN REACT</h2>
    <form>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Hello {username}
    </label>
    <input
      type="text"
      className="form-control"
      id="Username"
      aria-describedby="emailHelp" 
      onChange={handleUsername}
    />
    <div id="emailHelp" className="form-text">
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address: <span className="text-danger">{email}</span>
    </label>
    <input
      type="email"
      className="form-control"
      id="username"
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}
    /> 
    <div id="emailHelp" className="form-text">
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="Password  " className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="Password"
      onChange={(e)=>setPassword(e.target.value)}

    />
  </div>
  <div className="text-center">
  <button type="submit" className="btn btn-danger">
    Submit
  </button>
  </div>
  
 
</form>
</div>

  )
}

export default Form