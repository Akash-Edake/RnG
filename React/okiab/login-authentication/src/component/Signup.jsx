import React from 'react'
import { useState } from 'react'
import app from './FirebaseConfig';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const auth = getAuth(app);

const Signup = () => {
  const initialData = {
    fname: "",
    lname: "",
    mobile: "",
    password: "",
    verifyButton: false,
    verifyOTP : false,
    otp:""

  }
  const [formData, setFormData] = useState(initialData);

 const onCaptchaVerify=()=>{
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // onSignInSubmit();
    }
  }, auth);
 }
 
const onSignInSubmit=()=>{
  const phoneNumber = formData.mobile;
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
  }).catch((error) => {
    // Error; SMS not sent
    // ...
  });
}
  const createUser = (e) => {
      e.preventDefault();
      const {fname,lname, mobile, password}= formData;
      console.log("data", fname, lname,mobile,password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type" : "application/json",
             Accept:"application/json",
            "Access-Control-Allow-Origin": "",
        },
        body:JSON.stringify({
            fname,
            lname,
            email:mobile,
            password
        })
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data, "userRegister");
    })
  }
  console.log("newState", formData);
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-5 border border-1 m-4">
            <form>
              <h3>Sign Up</h3>
              
              <div className="mb-3">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => setFormData({...formData, fname:e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Last name</label>
                <input type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => setFormData({...formData, lname:e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setFormData({...formData, mobile:e.target.value })}
                />
                <span id='sign-in-button'>
                </span>
                <input type="button" value="Verify" className='mt-3 px-4'/>
              </div>

              <div className="mb-3">
                <label>OTP</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setFormData({...formData, mobile:e.target.value })}
                />
                <span id='sign-in-button'>
                </span>
                <input type="button" value="OTP" className='mt-3 px-4'/>
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setFormData({...formData, password:e.target.value })}
                />
              </div>
              
              <div className="d-grid">
                <button type="submit"
                  className="btn btn-primary"
                  onClick={(e) => createUser(e)}
                >
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </form>
          </div>
        </div>

      </div>


    </>
  )
}

export default Signup