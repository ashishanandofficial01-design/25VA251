import React, { useState } from 'react'

function StudentReg() {
    const[data,setdata]=useState({name:'',phone:'',email:''});
    const handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (data.name==='' || data.email==='' || data.phone==='') {
            alert("Please fill in all fields.");
        }
        else{
            alert(`Name: ${data.name}\n Email: ${data.email}\n Phone: ${data.phone}`);
        }
    }
  return (
   <>
   <h1>Student Registartion Form</h1>
   <form onSubmit={handleSubmit}>
    <input type='text' name='name' placeholder='Enter Name' value={data.name} onChange={handleChange}/>
    <input type='text' name='email' placeholder='Enter Email' value={data.email} onChange={handleChange}/>
    <input type='text' name='phone' placeholder='Enter Phone' value={data.phone} onChange={handleChange }/>
    <button type='submit'>Submit Here!</button>
   </form>
   </>
  )
}

export default StudentReg