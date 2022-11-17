import React, {useState} from 'react'

const Login = () => {
  const initialVal= {
    email:"",
    password:""
  }
  const [loginData, setLoginData]= useState(initialVal);
  const handleSubmit=(e)=>{
      e.preventDefault();
      const {email, password}= loginData;
      console.log("data", email,password);
  }
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-5 border border-1 m-4">
        <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setLoginData({...loginData, email:e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setLoginData({...loginData, password:e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" 
          className="btn btn-primary"
          onClick={(e)=>handleSubmit(e)}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
        </div>
      </div>

    </div>

</>
  )
}

export default Login