import React, { useRef, useState } from 'react'
import FormInput from './FormInput'

const Form = () => {
    const initialValues={
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:""
    }
    const[formValues, setFormValues]= useState(initialValues);
    
    const inputs=[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"username",
            errorMessage:"username should be include 3-16 characters and numbers",
            label:"Username",
            pattern:`^[A-Za-z0-9]{3,16}$`,
            required:true
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"email",
            errorMessage:"it should be valid email id",
            label:"Email",
            required:true
        }, {
            id:3,
            name:"birthday",
            type:"date",
            placeholder:"birthday",
            errorMessage:"",
            label:"Birthday",
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"password",
            errorMessage:"Password includes 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
            label:"Password",
            pattern:"^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*]{8,20}",
            required:true
        }, {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"confirmpassword",
            errorMessage:"passWord doesnt match",
            label:"Confirm Password",
            pattern:formValues.password,
            required:true
        }
    ]

    const handleSubmit=(e)=>{
        e.preventDefault();
        // const data= new FormData(e.target);
        // console.log(Object.fromEntries(data.entries()));
    }

    const onChange=(e)=>{
        setFormValues({...formValues, [e.target.name] :e.target.value});
    }
    console.log(formValues)
  return (
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>
     {inputs.map((input)=>{
            return(
                 <FormInput key={input.id}  {...input} 
                 value={formValues[input.name]} 
                 onChange={onChange}/>
            )
        })}
    <button>Submit</button>
  </form>
  )
}

export default Form