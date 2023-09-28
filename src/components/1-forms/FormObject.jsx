import { useState } from "react"
const Form = () => {

const [formData, setFormData]=useState({
  username:"",
  email:"", 
  password:"",
})
const{username,email,password}=formData
    const handleSubmit=(e)=>{
        e.preventDefault()

      alert(`
      username:${username}
      email:${email}
      password:${password}
      `)
      setFormData({
        username:"",
        email:"",
        password:"",
      })
            }
const handleFormData=(e)=>{

              
setFormData({...formData,[e.target.id]:e.target.value})
            }
   
  
      return (
    <div className="container mt-4">
        <h2 className="text-center text-success"> FORM OBJECT IN REACT</h2>
    <form onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Hello {username}
    </label>
    <input
      type="text"
      className="form-control"
      id="username"
      aria-describedby="emailHelp" 
      onChange={handleFormData}
      value={username}
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
      id="email"
      aria-describedby="emailHelp"
      onChange={handleFormData}
      value={email}

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
      onChange={handleFormData}
     

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