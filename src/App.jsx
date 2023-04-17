import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  const[formData, setFormData] = React.useState(
    {
      firstName: '',
      lastName: ''
    })

  function handleChange (event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,

      }
    })

    console.log(formData)
  }

  return (
    <div className="App">
     <form action="">
        <input 
        type="text"
        placeholder='First Name' 
        onChange={handleChange}
        value={formData.firstName}
        name="firstName"
        />
        <input 
        type="text"
        placeholder='Last Name' 
        onChange={handleChange}
        value={formData.lastName}
        name="lastName"
        />
     </form>
    </div>
  )
}

export default App
